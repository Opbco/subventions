import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { connect } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../../utils/theme";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Grid from "@mui/material/Grid";
import { tokens } from "../../utils/theme";
import Copyright from "../Components/Copyright";
import { setInfoMsg, clearInfoMsg } from "./../redux/actions/configActions";
import MuiAlert from "@mui/material/Alert";
import BreadCrumbs from "../Components/BreadCrumbs";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const PageLayout = (props) => {
  const { t } = useTranslation();
  const [isSidebar, setIsSidebar] = useState(true);
  const colors = tokens(props.mode);

  const theme = useMemo(
    () => createTheme(themeSettings(props.mode)),
    [props.mode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
            className="content"
          >
            <TopBar setIsSidebar={setIsSidebar} />
            <Container sx={{ mt: 4, mb: 4, mx: 4, maxWidth: "100dvw" }}>
              <Grid container spacing={3}>
                <BreadCrumbs t={t} />
                <Outlet />
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={props.snackOpen}
              autoHideDuration={6000}
              onClose={props.clearInfoMsg}
            >
              <Alert
                onClose={props.clearInfoMsg}
                severity={props.infoSeverity}
                sx={{ width: "100%" }}
              >
                {props.messageInfo}
              </Alert>
            </Snackbar>
          </Box>
        </div>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => ({
  mode: state.config.mode,
  messageInfo: state.config.infoMessage,
  snackOpen: state.config.snackOpen,
  infoSeverity: state.config.infoSeverity,
});

const mapActionsToProps = {
  setInfoMsg,
  clearInfoMsg,
};

export default connect(mapStateToProps, mapActionsToProps)(PageLayout);
