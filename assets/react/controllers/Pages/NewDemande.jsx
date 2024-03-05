import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  TextField,
  useTheme,
  styled,
  FormControlLabel,
  Switch,
  FormControl,
  FormHelperText,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import { LoadingButton } from "@mui/lab";
import {
  useGetDemandeCurrentQuery,
  useEditDemandeMutation,
} from "./../redux/services/openApi";
import Error from "../../controllers/Error";
import StructureDetails from "../Components/structures/StructureDetails";
import { setInfoMsg } from "./../redux/actions/configActions";
import DemandePieces from "../Components/demandes/DemandePieces";
import ImprimeEts from "../Components/demandes/ImprimeEts";
import Loading from "../../utils/Loading";

const Grid = styled("div")(
  ({ theme }) => `
  display: grid;
  width: 96%;
  margin: 10px auto;
  grid-template-columns: 70% 30%;
  gap: 20px;
  grid-template-areas: 
    "piece   piece"
    "demande structure";
  ${theme.breakpoints.down("sm")}{
    grid-template-columns: 1fr;
    grid-template-areas:
    "structure" 
    "piece";
    "demande"
  }
`
);

export const Field = styled(TextField)`
  & label {
    font-weight: bold;
    font-size: 1rem;
  }
`;

const DemandeContainer = styled("div")(`
  grid-area: demande;
`);

const StructureContainer = styled("div")(`
  grid-area: structure;
`);

const PieceContainer = styled("div")(`
  grid-area: piece;
`);

const NewDemande = (props) => {
  const { t } = useTranslation();
  const [initialValues, setInitialValues] = useState({});
  const [valide, setValide] = useState(false);
  const theme = useTheme();
  const isOrg = props.structure.quality !== "Etablissement";
  const [openFormPrint, setOpenFormPrint] = useState(false);
  const {
    data: demande,
    isFetching,
    error,
  } = useGetDemandeCurrentQuery(
    { id: props.structure.id, session: props.session.id },
    {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );

  const [updateDemande, { isLoading: isUpdating }] = useEditDemandeMutation();

  useEffect(() => {
    document.title = props.title;
  }, []);

  useEffect(() => {
    if (demande) {
      setInitialValues({
        nombreEleve: demande?.nombreEleve || 0,
        nombrePersonnelEnseignant: demande?.nombrePersonnelEnseignant || 0,
        nombrePersonnelPermanent: demande?.nombrePersonnelPermanent || 0,
        personnel_autorise: demande?.personnel_autorise || false,
        personnel_contract: demande?.personnel_contract || false,
        percentExamen: demande?.percentExamen || 0,
        nomFondateur: demande?.structure?.nomFondateur || "",
        contactFondateur: demande?.structure?.contactFondateur || "",
        contacts: demande?.structure?.contacts || "",
        isOrg,
      });
    }
  }, [demande, isOrg]);

  const checkoutSchema = yup.object().shape(
    {
      nomFondateur: yup
        .string()
        .required(t("form.error_namef_required"))
        .min(4, t("form.error_namef_length")),
      contactFondateur: yup
        .string()
        .required(t("form.error_contactf_required"))
        .min(9, t("form.error_contacts_length")),
      isOrg: yup.boolean().notRequired(),
      personnel_autorise: yup.boolean().when("isOrg", ([isOrg], schema) => {
        return isOrg
          ? schema.notRequired()
          : schema.required(t("form.error_personnel_autorise_required"));
      }),
      personnel_contract: yup.boolean().when("isOrg", ([isOrg], schema) => {
        return isOrg
          ? schema.notRequired()
          : schema.required(t("form.error_personnel_contract_required"));
      }),
      contacts: yup
        .string()
        .required(t("form.error_contacts_required"))
        .min(9, t("form.error_contacts_length")),
      percentExamen: yup.number().when("isOrg", ([isOrg], schema) => {
        return isOrg
          ? schema.notRequired()
          : schema
              .positive(t("form.error_nombre_positif"))
              .required(t("form.error_percentExamen_required"))
              .min(0, t("form.error_nombre_min", { val: 0 }))
              .max(100, t("form.error_nombre_max", { val: 100 }));
      }),
      nombrePersonnelEnseignant: yup
        .number()
        .when("isOrg", ([isOrg], schema) => {
          return isOrg
            ? schema.notRequired()
            : schema
                .positive(t("form.error_nombre_positif"))
                .required(t("form.error_nombrePersonnelEnseignant_required"));
        }),
      nombreEleve: yup.number().when("isOrg", ([isOrg], schema) => {
        return isOrg
          ? schema.notRequired()
          : schema
              .positive(t("form.error_nombre_positif"))
              .required(t("form.error_nombreEleve_required"));
      }),
      nombrePersonnelPermanent: yup
        .number()
        .positive(t("form.error_nombrePersonnelPermanent_required"))
        .when(
          "nombrePersonnelEnseignant",
          ([nombrePersonnelEnseignant], schema) => {
            return nombrePersonnelEnseignant
              ? schema.max(
                  nombrePersonnelEnseignant,
                  t("form.error_nombre_max", { val: nombrePersonnelEnseignant })
                )
              : schema
                  .min(0, t("form.error_nombre_min", { val: 0 }))
                  .notRequired();
          }
        ),
    },
    [
      ["nombrePersonnelPermanent", "nombrePersonnelEnseignant"],
      ["nombreEleve", "isOrg"],
      ["nombrePersonnelEnseignant", "isOrg"],
      ["percentExamen", "isOrg"],
      ["personnel_autorise", "isOrg"],
      ["personnel_contract", "isOrg"],
    ]
  );

  const handleFormSubmit = async (data) => {
    const res = await updateDemande({ ...data, id: demande?.id });
    const jres = JSON.parse(res?.data);
    if (jres?.success) {
      props.setInfoMsg({
        message: t("message.demande_updated_success"),
        severity: "success",
      });
      setOpenFormPrint(true);
    } else {
      props.setInfoMsg({
        message: jres?.message,
        severity: "error",
      });
    }
  };

  if (error) return <Error />;

  return (
    <>
      <Grid>
        <DemandeContainer>
          <Formik
            enableReinitialize
            onSubmit={handleFormSubmit}
            initialValues={{ ...initialValues }}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  my: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {isFetching ? (
                  <Loading />
                ) : (
                  <>
                    <Box>
                      {!isOrg && (
                        <fieldset
                          style={{
                            marginBlock: 20,
                            padding: 15,
                            borderWidth: 1,
                          }}
                        >
                          <legend>{t("demande.group")}</legend>
                          <Field
                            id="nombreEleve"
                            label={t("form.nombreEleve")}
                            fullWidth
                            type="number"
                            name="nombreEleve"
                            variant="standard"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ min: 0 }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.nombreEleve}
                            error={
                              !!touched.nombreEleve && !!errors.nombreEleve
                            }
                            helperText={
                              touched.nombreEleve && errors.nombreEleve
                            }
                          />
                          <Field
                            id="percentExamen"
                            label={t("form.percentExamen")}
                            fullWidth
                            type="number"
                            name="percentExamen"
                            variant="standard"
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ min: 0, max: 100 }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.percentExamen}
                            error={
                              !!touched.percentExamen && !!errors.percentExamen
                            }
                            helperText={
                              touched.percentExamen && errors.percentExamen
                            }
                            sx={{ my: 1 }}
                          />
                          <Field
                            id="nombrePersonnelEnseignant"
                            label={t("form.nombrePersonnelEnseignant")}
                            fullWidth
                            name="nombrePersonnelEnseignant"
                            type="number"
                            variant="standard"
                            inputProps={{ min: 0 }}
                            InputLabelProps={{ shrink: true }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.nombrePersonnelEnseignant}
                            error={
                              !!touched.nombrePersonnelEnseignant &&
                              !!errors.nombrePersonnelEnseignant
                            }
                            helperText={
                              touched.nombrePersonnelEnseignant &&
                              errors.nombrePersonnelEnseignant
                            }
                            sx={{ my: 1 }}
                          />
                          <Field
                            id="nombrePersonnelPermanent"
                            label={t("form.nombrePersonnelPermanent")}
                            fullWidth
                            name="nombrePersonnelPermanent"
                            type="number"
                            variant="standard"
                            inputProps={{ min: 0 }}
                            InputLabelProps={{ shrink: true }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.nombrePersonnelPermanent}
                            error={
                              !!touched.nombrePersonnelPermanent &&
                              !!errors.nombrePersonnelPermanent
                            }
                            helperText={
                              touched.nombrePersonnelPermanent &&
                              errors.nombrePersonnelPermanent
                            }
                            sx={{ my: 1 }}
                          />
                          <FormControl>
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={values.personnel_autorise}
                                  onChange={(e) => {
                                    setFieldValue(
                                      "personnel_autorise",
                                      e.target.checked
                                    );
                                  }}
                                />
                              }
                              label={t("form.personnel_autorise")}
                            />
                            <FormHelperText>
                              {touched.personnel_autorise &&
                                errors.personnel_autorise}
                            </FormHelperText>
                          </FormControl>
                          <FormControl>
                            <FormControlLabel
                              control={
                                <Switch
                                  checked={values.personnel_contract}
                                  onChange={(e) => {
                                    setFieldValue(
                                      "personnel_contract",
                                      e.target.checked
                                    );
                                  }}
                                />
                              }
                              label={t("form.personnel_contract")}
                            />
                            <FormHelperText>
                              {touched.personnel_contract &&
                                errors.personnel_contract}
                            </FormHelperText>
                          </FormControl>
                        </fieldset>
                      )}
                      <fieldset style={{ padding: 15, borderWidth: 1 }}>
                        <legend>{t("structure.group")}</legend>
                        <Field
                          id="contacts"
                          label={t("form.contacts")}
                          fullWidth
                          name="contacts"
                          variant="standard"
                          InputLabelProps={{ shrink: true }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.contacts}
                          error={!!touched.contacts && !!errors.contacts}
                          helperText={touched.contacts && errors.contacts}
                        />
                        <Field
                          id="nomFondateur"
                          label={t("form.nomFondateur")}
                          fullWidth
                          name="nomFondateur"
                          variant="standard"
                          InputLabelProps={{ shrink: true }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.nomFondateur}
                          error={
                            !!touched.nomFondateur && !!errors.nomFondateur
                          }
                          helperText={
                            touched.nomFondateur && errors.nomFondateur
                          }
                          sx={{ my: 1 }}
                        />
                        <Field
                          id="contactFondateur"
                          label={t("form.contactFondateur")}
                          fullWidth
                          name="contactFondateur"
                          variant="standard"
                          InputLabelProps={{ shrink: true }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.contactFondateur}
                          error={
                            !!touched.contactFondateur &&
                            !!errors.contactFondateur
                          }
                          helperText={
                            touched.contactFondateur && errors.contactFondateur
                          }
                          sx={{ my: 1 }}
                        />
                      </fieldset>
                      <fieldset
                        style={{ padding: 15, marginBlock: 10, borderWidth: 1 }}
                      >
                        <legend>{t("contact.group")}</legend>
                        <Typography variant="h5">
                          Le Sécretariat Technique
                        </Typography>
                        <Typography variant="body1">
                          Tel:{" "}
                          <a href="tel:677378455" target="_blank">
                            677 37 84 55 / 694 29 81 31
                          </a>
                        </Typography>
                        <Typography variant="body2">
                          Email:{" "}
                          <a
                            href="mailto:desg.sdsgepesg.ssub@minesec.gov.cm"
                            target="_blank"
                          >
                            desg.sdsgepesg.ssub@minesec.gov.cm
                          </a>
                        </Typography>
                        <Typography variant="h5" sx={{ mt: 2 }}>
                          La Cellule Informatique
                        </Typography>
                        <Typography variant="body1">
                          Tel:{" "}
                          <a href="tel:674921111" target="_blank">
                            674 92 11 11
                          </a>
                        </Typography>
                        <Typography variant="body2">
                          Email:{" "}
                          <a
                            href="mailto:sg.celinfo.cea1@minesec.gov.cm"
                            target="_blank"
                          >
                            sg.celinfo.cea1@minesec.gov.cm
                          </a>
                        </Typography>
                      </fieldset>
                    </Box>
                    <LoadingButton
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      loading={isUpdating}
                      disabled={valide}
                    >
                      <span>{t("form.submit")}</span>
                    </LoadingButton>
                  </>
                )}
              </Box>
            )}
          </Formik>
        </DemandeContainer>
        <StructureContainer>
          <StructureDetails isOrg={isOrg} />
        </StructureContainer>
        <PieceContainer>
          {Boolean(demande) && (
            <DemandePieces demandeId={demande?.id} setValide={setValide} />
          )}
        </PieceContainer>
      </Grid>
      <ImprimeEts
        demandeId={demande?.id}
        open={openFormPrint}
        handleOpenClose={setOpenFormPrint}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  roles: state.auth.roles,
  structure: state.auth.credentials.structure,
  session: state.auth.credentials.session,
});

const mapActionsToProps = {
  setInfoMsg,
};

export default connect(mapStateToProps, mapActionsToProps)(NewDemande);
