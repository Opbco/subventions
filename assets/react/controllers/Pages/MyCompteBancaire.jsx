import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Formik } from "formik";
import * as yup from "yup";
import { connect } from "react-redux";
import {
  useUploadRibFileMutation,
  useGetMyCompteBancaireQuery,
  useEditOrCreateCompteBancaireMutation,
} from "./../redux/services/openApi";
import {
  Box,
  TextField,
  styled,
  Typography,
  Stack,
  Link,
  IconButton,
  CircularProgress,
  Alert,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Error from "../../controllers/Error";
import { setInfoMsg } from "./../redux/actions/configActions";
import { getExtension } from "../../utils/Globals";
import CONSTANTS from "../../utils/Constants";
import { LoadingButton } from "@mui/lab";
import Loading from "../../utils/Loading";

const Field = styled(TextField)`
  margin-block: 8px;
  & label {
    font-weight: bold;
    font-size: 1rem;
  }
`;

const MyCompteBancaire = (props) => {
  const { t } = useTranslation();
  const [initialValues, setInitialValues] = useState({});
  const [copyRib, setCopyRib] = useState({});
  const fileInputField = useRef(null);
  const {
    data: compte,
    isFetching,
    error,
  } = useGetMyCompteBancaireQuery(props.structure.id, {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const [
    uploadRibFile, // This is the mutation trigger
    { isLoading: isUploading }, // This is the destructured mutation result
  ] = useUploadRibFileMutation();

  const [updateCreateCompte, { isLoading: isUpdating }] =
    useEditOrCreateCompteBancaireMutation();

  useEffect(() => {
    document.title = props.title;
  }, []);

  useEffect(() => {
    setInitialValues({
      id: compte?.id || 0,
      numero: compte?.numero || "",
      intitule: compte?.intitule || "",
      nameBanque: compte?.nameBanque || "",
      copyRIB: compte?.copyRIB?.id || 0,
    });
    if (compte?.copyRIB) {
      setCopyRib(compte?.copyRIB);
    }
  }, [compte]);

  const checkoutSchema = yup.object().shape({
    numero: yup
      .string()
      .required(t("form.error_numero_required"))
      .min(8, t("form.error_numero_length")),
    intitule: yup
      .string()
      .required(t("form.error_intitule_required"))
      .min(9, t("form.error_intitule_required")),
    copyRIB: yup
      .number()
      .positive(t("form.error_copierib_required"))
      .integer()
      .required(t("form.error_copierib_required")),
    nameBanque: yup
      .string()
      .required(t("form.error_namebanque_required"))
      .min(9, t("form.error_namebanque_length")),
  });

  const handleFormSubmit = async (data) => {
    const res = await updateCreateCompte({
      ...data,
      structure: props.structure.id,
    });
    if (res?.data.success) {
      props.setInfoMsg({
        message: t("message.compte_create_updated_success"),
        severity: "success",
      });
    } else {
      props.setInfoMsg({
        message: res?.data.message,
        severity: "error",
      });
    }
  };

  const handleNewFile = async (e, setFieldValue) => {
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      if (e.target.files[0].size > 2097152) {
        props.setInfoMsg({
          message: t("message.file_upload_toobig"),
          severity: "warning",
        });
        return false;
      }
      if (!allowedTypes.includes(e.target.files[0]?.type)) {
        props.setInfoMsg({
          message: t("message.file_upload_wrongtype"),
          severity: "warning",
        });
        return false;
      }
      let formData = new FormData();
      formData.append("fileName", e.target.files[0].name);
      formData.append("file", e.target.files[0]);
      const res = await uploadRibFile({
        id: props.structure.id,
        data: formData,
      });
      if (res.data?.success) {
        props.setInfoMsg({
          message: t("message.file_upload_success"),
          severity: "success",
        });
        setCopyRib(res.data?.data);
        setFieldValue("copyRIB", res.data.data?.id);
      } else {
        console.log(res);
        props.setInfoMsg({
          message: res?.error?.data.message,
          severity: "error",
        });
      }
    }
  };

  if (isFetching) return <Loading />;

  if (error) return <Error />;

  return (
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
          <Box>
            <Typography variant="h4" marginTop={3} marginBottom={6}>
              {t("account_details")}
            </Typography>
            <Alert
              variant="outlined"
              severity="warning"
              sx={{ marginBlock: 5, fontSize: 16 }}
            >
              {t("alert_account_message")}
            </Alert>
            <Field
              id="nameBanque"
              label={t("form.namebanque")}
              fullWidth
              name="nameBanque"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              placeholder="COMMERCIAL MINESEC BANK"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.nameBanque}
              error={!!touched.nameBanque && !!errors.nameBanque}
              helperText={touched.nameBanque && errors.nameBanque}
            />
            <Field
              id="numero"
              label={t("form.numero")}
              fullWidth
              name="numero"
              variant="standard"
              placeholder="10005 00003 00142124412 20"
              InputLabelProps={{ shrink: true }}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.numero}
              error={!!touched.numero && !!errors.numero}
              helperText={touched.numero && errors.numero}
            />
            <Field
              id="intitule"
              label={t("form.intitule")}
              fullWidth
              name="intitule"
              placeholder="COLLEGE SAINT MINESEC"
              variant="standard"
              InputLabelProps={{ shrink: true }}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.intitule}
              error={!!touched.intitule && !!errors.intitule}
              helperText={touched.intitule && errors.intitule}
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              marginY={1}
            >
              {values.copyRIB ? (
                <Link
                  href={`${CONSTANTS.BASE_URL}/uploads/${copyRib.fileName}`}
                  target="_blank"
                  rel="noopener"
                  color={touched.copyRIB && "#FF0000"}
                >
                  {copyRib.fileName}
                </Link>
              ) : (
                <Typography
                  variant="subtitle1"
                  color={touched.copyRIB && "red"}
                >
                  {t("form.file_not_attached")}
                </Typography>
              )}
              <input
                style={{ visibility: "hidden" }}
                type="file"
                ref={fileInputField}
                onChange={(e) => handleNewFile(e, setFieldValue)}
                accept="image/png, image/jpeg, .pdf"
              />
              {isUploading ? (
                <CircularProgress color="inherit" />
              ) : (
                <IconButton
                  edge="start"
                  aria-label="upload"
                  onClick={() => fileInputField.current.click()}
                >
                  <UploadFileIcon />
                </IconButton>
              )}
            </Stack>
            <LoadingButton
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              loading={isUpdating}
            >
              <span>{t("form.submit_compte")}</span>
            </LoadingButton>
          </Box>
        </Box>
      )}
    </Formik>
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

export default connect(mapStateToProps, mapActionsToProps)(MyCompteBancaire);
