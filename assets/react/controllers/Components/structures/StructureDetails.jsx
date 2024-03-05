import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Stack, styled, Typography } from "@mui/material";
import { connect } from "react-redux";
import { setInfoMsg } from "../../redux/actions/configActions";
import { useGetStructureDetailsQuery } from "../../redux/services/openApi";
import Error from "../../Error";

export const Field = styled(Typography)(({ theme }) => ({
  flex: 1,
  minWidth: "300px",
  borderBottom: "solid 2px",
  borderBottomColor: theme.palette.menu.icon,
  paddingBottom: 4,
  textTransform: "uppercase",
  fontWeight: 500,
  letterSpacing: 0.4,
  fontSize: 12,
}));

const StructureDetails = (props) => {
  const { t } = useTranslation();
  const {
    data: struct,
    isFetching,
    error,
  } = useGetStructureDetailsQuery(props.structure.id, {
    pollingInterval: 0,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  if (error) return <Error />;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      gap={2}
    >
      <Stack direction="column" alignItems="flex-start" flex={1}>
        <Typography variant="caption">{t("structure.region")} :</Typography>
        <Field>{struct?.subdivision.division.region.name}</Field>
      </Stack>
      <Stack direction="column" alignItems="flex-start" flex={1}>
        <Typography variant="caption">{t("structure.division")} :</Typography>
        <Field>{struct?.subdivision.division.name}</Field>
      </Stack>
      <Stack direction="column" alignItems="flex-start" flex={1}>
        <Typography variant="caption">
          {t("structure.subdivision")} :
        </Typography>
        <Field>{struct?.subdivision.name}</Field>
      </Stack>
      <Stack direction="column" alignItems="flex-start" flex={1}>
        <Typography variant="caption">{t("structure.code")} :</Typography>
        <Field>{struct?.code}</Field>
      </Stack>
      <Stack direction="column" alignItems="flex-start" flex={1}>
        <Typography variant="caption">{t("structure.name")} :</Typography>
        <Field>{struct?.name}</Field>
      </Stack>
      <Stack direction="column" alignItems="flex-start" flex={1}>
        <Typography variant="caption">{t("structure.type")} :</Typography>
        <Field>{struct?.typeStructure}</Field>
      </Stack>
      <Stack direction="column" alignItems="flex-start" flex={1}>
        <Typography variant="caption">{t("structure.ordre")} :</Typography>
        <Field>{struct?.ordre.name}</Field>
      </Stack>
      {!props.isOrg && (
        <>
          <Stack direction="column" alignItems="flex-start" flex={1}>
            <Typography variant="caption">{t("structure.forme")} :</Typography>
            <Field>{struct?.forme.name}</Field>
          </Stack>
          <Stack direction="column" alignItems="flex-start" flex={1}>
            <Typography variant="caption">{t("structure.system")} :</Typography>
            <Field>{struct?.langue.label}</Field>
          </Stack>
          <Stack direction="column" alignItems="flex-start" flex={1}>
            <Typography variant="caption">
              {t("structure.adresse")} :
            </Typography>
            <Field>{struct?.adresse}</Field>
          </Stack>
        </>
      )}
    </Stack>
  );
};

const mapStateToProps = (state) => ({
  roles: state.auth.roles,
  structure: state.auth.credentials.structure,
});

const mapActionsToProps = {
  setInfoMsg,
};

export default connect(mapStateToProps, mapActionsToProps)(StructureDetails);
