import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import {
  Tooltip,
  Stack,
  Box,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import SigninForm from "../Components/users/signinForm";
import SignupForm from "../Components/users/signupForm";
import i18n from "i18next";
import Contact from "../Components/Contact";

const SignIn = (props) => {
  const { t } = useTranslation();
  const [signIn, setSignIn] = React.useState(1);

  React.useEffect(() => {
    document.title = props.title;
  }, []);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        sx={{
          backgroundImage: "url(./images/minesec.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: 600,
            backgroundColor: "#fff3",
            backdropFilter: "blur(15px)",
          }}
        >
          <IconButton
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
              color: "mediumspringgreen",
            }}
            onClick={() =>
              i18n.changeLanguage(i18n.language.startsWith("fr") ? "en" : "fr")
            }
          >
            <Tooltip title={t("change_language")}>
              <Typography>{i18n.language.startsWith("fr") ? " EN" : " FR"}</Typography>
            </Tooltip>
          </IconButton>
          <h5
            style={{
              marginInline: "auto",
              marginBlockStart: "2rem",
              marginBlockEnd: "1rem",
              textAlign: "center",
              fontSize: "1.6rem",
              fontWeight: 700,
            }}
          >
            {t("welcome_title", { ns: "login" })}
          </h5>
          {signIn == 1 ? (
            <SigninForm
              t={t}
              signup={() => setSignIn(0)}
              help={() => setSignIn(3)}
            />
          ) : signIn == 0 ? (
            <SignupForm
              t={t}
              signin={() => setSignIn(1)}
              help={() => setSignIn(3)}
            />
          ) : (
            <Contact t={t} signin={() => setSignIn(1)} signup={() => setSignIn(0)} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
