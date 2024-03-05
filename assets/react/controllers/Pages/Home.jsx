import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Box, Alert, Typography, useTheme, Link } from "@mui/material";
import { tokens } from "../../utils/theme";
import { connect } from "react-redux";
import i18n from "i18next";
import CONSTANTS from "../../utils/Constants";

const Home = (props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ flexGrow: 1, maxWidth: "100%" }}>
      <Typography variant="h3" textAlign="center">
        {t("welcome_message")} <br /> {props.structure.name}
      </Typography>
      {props.structure.isTech && (
        <Typography variant="h5" textAlign="center" my={8} >
          {t("welcome_file_stat_estp_message")}
          {"  "}
        <Link
          href={`${CONSTANTS.BASE_URL}/uploads/${i18n.language == "en" ? "Eng Administrative Form Subv ESTP.pdf" : "Fr Fiche Administrative Subv ESTP.pdf"}`}
          target="_blank"
          rel="noopener"
          color={"#1FA030"}
        >
          {t("welcome_file_stat_estp")}
        </Link>
        </Typography>
      )}
      <Alert
        variant="outlined"
        severity="warning"
        sx={{ marginTop: 6, fontSize: 16 }}
      >
        {t("welcome_alert_account_message")}
      </Alert>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  roles: state.auth.roles,
  structure: state.auth.credentials.structure,
});

export default connect(mapStateToProps)(Home);
