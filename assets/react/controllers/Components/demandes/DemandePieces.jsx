import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Alert,
  Stack,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  useTheme,
  ListItemText,
  Link,
  Paper,
  AlertTitle,
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { connect } from "react-redux";
import {
  useGetListPiecesQuery,
  useGetDemandePiecesQuery,
  useUploadDemandeFileMutation,
  useDeleteDemandePieceMutation,
} from "./../../redux/services/openApi";
import { setInfoMsg } from "./../../redux/actions/configActions";
import Error from "../../../controllers/Error";
import CONSTANTS from "../../../utils/Constants";
import Swal from "sweetalert2";
import i18n from "i18next";

const DemandePieces = (props) => {
  const { t } = useTranslation();
  const fileInputField = useRef(null);
  const [Id, setId] = useState(-1);
  const theme = useTheme();
  const [
    deleteDemandePiece, // This is the mutation trigger
    { isLoading: isDeleting }, // This is the destructured mutation result
  ] = useDeleteDemandePieceMutation();
  const {
    data: pieces,
    isFetching: loading,
    error,
  } = useGetListPiecesQuery(
    props.structure.quality != "Etablissement" ? 1 : 0,
    {
      pollingInterval: 0,
      refetchOnMountOrArgChange: true,
      skip: false,
    }
  );
  const {
    data: mypieces,
    isFetching: loadingp,
    error: errorm,
  } = useGetDemandePiecesQuery(props.demandeId, {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const [
    uploadfile, // This is the mutation trigger
    { isLoading: isUpdating },
  ] = useUploadDemandeFileMutation();

  useEffect(() => {
    const compulPiece = mypieces?.filter((pie) => pie.piece?.compulsory && (pie.piece?.isDestp ? props.structure.isTech : true));
    const compulsoryPieces = pieces?.filter((pie) => pie.compulsory && (pie.isDestp ? props.structure.isTech : true));

    props.setValide(compulPiece?.length != compulsoryPieces?.length);
  }, [mypieces, pieces]);

  const getPieceFile = useCallback(
    (piece) => {
      const file = mypieces?.find((file) => file.piece?.id === piece.id);
      return file ? (
        <Link
          color={theme.palette.menu.icon}
          href={`${CONSTANTS.BASE_URL}/uploads/${file.file.fileName}`}
          target="_blank"
          rel="noopener"
        >
          {file.file.fileName}
        </Link>
      ) : (
        <Typography variant="subtitle1">
          {t("message.file_not_attached")}
        </Typography>
      );
    },
    [mypieces]
  );

  const handleDeleteClick = React.useCallback(
    (id) => {
      Swal.fire({
        title: t("message.delete_piece"),
        icon: "question",
        showCancelButton: true,
        confirmButtonText: t("delete"),
        confirmButtonColor: theme.palette.error,
      }).then((result) => {
        if (result.isConfirmed) {
          deleteDemandePiece({ id: props.demandeId, piece: id })
            .then((res) => {
              if (res.data) {
                props.setInfoMsg({
                  message: t("message.delete_piece_success"),
                  severity: "success",
                });
              }
            })
            .catch(function (error) {
              props.setInfoMsg({
                message: error.response.data.message,
                severity: "error",
              });
            });
        }
      });
    },
    [mypieces]
  );

  const pickFile = (id) => {
    setId(id);
    fileInputField.current.click();
  };

  const handleNewFile = async (e) => {
    const valideFileNamePattern = /[ `!@#$%^&*()+\-=[\]{};':"\\|,<>\/?~]|[\u00C0-\u00FF\u0100-\u017F\u0180-\u024F]/;
    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];
    if (e.target.files[0]) {
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

      if (valideFileNamePattern.test(e.target.files[0].name)) {
        console.log(e.target.files[0].name);
        props.setInfoMsg({
          message: t("message.file_upload_wrongname"),
          severity: "warning",
        });
        return false;
      }

      let formData = new FormData();
      formData.append("fileName", e.target.files[0].name);
      formData.append("file", e.target.files[0]);
      const res = await uploadfile({
        id: props.demandeId,
        piece: Id,
        data: formData,
      });
      if (res.data?.success) {
        props.setInfoMsg({
          message: t("message.file_upload_success"),
          severity: "success",
        });
      } else {
        props.setInfoMsg({
          message: res?.error?.data.message,
          severity: "error",
        });
      }
    }
  };

  if (error || errorm) return <Error />;

  return (
    <>
      <input
        style={{ visibility: "hidden" }}
        type="file"
        ref={fileInputField}
        onChange={handleNewFile}
        accept="image/png, image/jpeg, .pdf"
      />
      {props.valide? (
        <Alert variant="filled" severity="error">
          <AlertTitle>{t("message.file_upload_alert")}</AlertTitle>
          <AlertTitle>{t("message.file_upload_incomplet")}</AlertTitle>
          <AlertTitle>{t("message.file_upload_condition")}</AlertTitle>
        </Alert>
      ) : (
        <Alert severity="success">{t("message.file_upload_all")}</Alert>
      )}

      <TableContainer component={Paper}>
        <Table sx={{ width: "100%" }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={3}>
                {t("list_piece_exigee", { val: pieces?.length || 0 })}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pieces?.map((piece, i) => {
              if(piece?.isDestp && !props.structure.isTech) return null;
              return (
              <TableRow key={`indexlistp${i}`}>
                <TableCell align="left">
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          backgroundColor: piece.compulsory
                            ? "#f10231"
                            : "#0004",
                        }}
                      >
                        <AttachFileIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        i18n.language == "en" ? piece.nameen : piece.name
                      }
                      secondary={
                        i18n.language == "en"
                          ? piece.signataireen
                          : piece.signataire
                      }
                    />
                  </ListItem>
                </TableCell>
                <TableCell align="right">{getPieceFile(piece)}</TableCell>
                <TableCell align="right">
                  <Stack direction="row" alignItems="center" columnGap={1}>
                    {isUpdating ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      <IconButton
                        edge="start"
                        aria-label="upload"
                        disabled={Boolean(
                          mypieces?.find((val) => val?.piece.id == piece.id)
                        )}
                        onClick={() => pickFile(piece.id)}
                      >
                        <UploadFileIcon />
                      </IconButton>
                    )}
                    <IconButton
                      color={theme.palette.card.main}
                      edge="end"
                      aria-label="delete"
                      disabled={
                        !Boolean(
                          mypieces?.find((val) => val?.piece.id == piece.id)
                        )
                      }
                      onClick={() => handleDeleteClick(piece.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableRow>
            ); })}
          </TableBody>
        </Table>
      </TableContainer>
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

export default connect(mapStateToProps, mapActionsToProps)(DemandePieces);
