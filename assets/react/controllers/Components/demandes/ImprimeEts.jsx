import React from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  Stack,
  styled,
  Typography,
  Slide,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from "@mui/material";
import { connect } from "react-redux";
import {
  useGetStructureDetailsQuery,
  useGetDemandePiecesQuery,
} from "../../redux/services/openApi";
import Error from "../../Error";
import ReactToPrint from "react-to-print";
import { format } from "date-fns";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import Entete from "../structures/Entete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Field = styled(Typography)(({ theme }) => ({
  minWidth: "120mm",
  borderBottom: "solid 2px",
  borderBottomColor: theme.palette.card.main,
  paddingBottom: 4,
  textTransform: "uppercase",
  fontWeight: 300,
  letterSpacing: 0.4,
  fontSize: 12,
}));

const ImprimeEts = (props) => {
  const { t } = useTranslation();
  const printRef = React.useRef();
  const {
    data: struct,
    isFetching,
    error,
  } = useGetStructureDetailsQuery(props.structure.id, {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const {
    data: pieces,
    isFetching: loading,
    error: error_pieces,
  } = useGetDemandePiecesQuery(props.demandeId, {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const isOrg = props.structure.quality !== "Etablissement";

  const options = {
    filename: `Demande_subvention_${props.demandeId}`,
    method: "save",
    resolution: Resolution.HIGH,
    page: {
      margin: Margin.MEDIUM,
      format: "A4",
      orientation: "portrait",
    },
    canvas: {
      mimeType: "image/jpeg",
      qualityRatio: 1,
    },
    overrides: {
      pdf: {
        compress: true,
      },
      canvas: {
        useCORS: true,
      },
    },
  };

  const openPDF = () => {
    generatePDF(() => document.getElementById("pdf-wrapper"), options);
  };

  if (error || error_pieces) return <Error />;

  return (
    <Dialog
      fullScreen
      TransitionComponent={Transition}
      open={props.open}
      onClose={() => props.handleOpenClose(false)}
    >
      <DialogTitle>{t("message.demande_updated_success")}</DialogTitle>
      <DialogContent sx={{ display: "grid", placeItems: "center" }}>
        <div
          ref={printRef}
          id="pdf-wrapper"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            width: "100%",
            maxWidth: "190mm",
            margin: "60px auto !important",
          }}
        >
          <Entete />
          <Stack
            direction="column"
            alignItems="flex-start"
            gap={1}
            flex={1}
            width="100%"
            marginTop={3}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              width="100%"
            >
              <Typography variant="h6">STRUCTURE :</Typography>
              <Field>{struct?.name}</Field>
            </Stack>
            {!isOrg && (
              <>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={1}
                  width="100%"
                >
                  <Typography variant="h6" sx={{ flex: 1 }}>
                    Numéro d'immatriculation :
                  </Typography>
                  <Field>{struct?.code}</Field>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={1}
                  width="100%"
                >
                  <Typography variant="h6">Nom du responsable :</Typography>
                  <Field>{struct?.nomFondateur}</Field>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={1}
                  width="100%"
                >
                  <Typography variant="h6">ordre :</Typography>
                  <Field>{struct?.ordre.name}</Field>
                </Stack>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={1}
                  width="100%"
                >
                  <Typography variant="h6" sx={{ flex: 1 }}>
                    type :
                  </Typography>
                  <Field>{struct?.forme.name}</Field>
                </Stack>
              </>
            )}
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              width="100%"
            >
              <Typography variant="h6">région :</Typography>
              <Field>{struct?.subdivision.division.region.name}</Field>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              width="100%"
            >
              <Typography variant="h6">département :</Typography>
              <Field>{struct?.subdivision.division.name}</Field>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              width="100%"
            >
              <Typography variant="h6" sx={{ flex: 1 }}>
                arrondissement:
              </Typography>
              <Field>{struct?.subdivision.name}</Field>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              width="100%"
            >
              <Typography variant="h6">Email: </Typography>
              <Field sx={{ textTransform:"none"}}>
                {props.user?.email}
              </Field>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            gap={1}
            marginTop={1}
          >
            <Typography variant="h4">pièces jointes:</Typography>
            <ul style={{ fontSize: "11pt"}}>
              {pieces?.map((piece, i) => (
                <li key={`piece${i}`}> {piece?.piece.name} </li>
              ))}
            </ul>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={0}
          >
            <Typography variant="h6">
              N<sup>o</sup> de dépôt du dossier: {props.demandeId}
            </Typography>
            <Typography variant="h6" textTransform="none">
              Signature du requérant
            </Typography>
          </Stack>
          <Typography variant="subtitle1" marginTop={isOrg? 10 : 0}>
            {format(new Date(), "dd MMM yyyy, hh:ii")}
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleOpenClose(false)} variant="outlined">
          {t("print.cancel")}
        </Button>
        <Button onClick={openPDF} variant="outlined" >{t("print.pdf")}</Button>
        <ReactToPrint
          trigger={() => <Button type="submit" variant="outlined">{t("print.btn")}</Button>}
          content={() => printRef.current}
        />
      </DialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.credentials,
  structure: state.auth.credentials.structure,
});

const mapActionsToProps = {};

export default connect(mapStateToProps, mapActionsToProps)(ImprimeEts);
