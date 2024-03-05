import React from "react";
import { Typography, Link, Box, Grid, Paper, Stack } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Copyright from "./Copyright";
import i18n from "i18next";

const Contact = (props) => {
  const { t, signin, signup } = props;

  console.log(i18n.language);

  return (
    <Box
      sx={{
        mb: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper sx={{ width: "100%", marginBlock: 4, padding: 2 }}>
        <Typography variant="h4">
          {t("contact_cellinfo", { ns: "login" })}
        </Typography>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
          marginY={3}
        >
          <CallIcon />
          <Link sx={{ color: "#29b027" }} href="tel:674921111" target="_blank">
            674 92 11 11
          </Link>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
          marginY={3}
        >
          <MailIcon />
          <Link
            sx={{ color: "#29b027" }}
            href="mailto:sg.celinfo.cea1@minesec.gov.cm"
            target="_blank"
          >
            sg.celinfo.cea1@minesec.gov.cm
          </Link>
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
          marginY={3}
        >
          <SaveAltIcon />
          {i18n.language.startsWith("fr") ? (
            <a
            style={{ color: "#29b027" }}
            href="/uploads/Guide utilisateur subvention.pdf"
            target="_blank"
            download
          >
            Guide utilisateur pour une demande de subvention
          </a>
          ) : (
            <a
              style={{ color: "#29b027" }}
              href="/uploads/Guidelines to apply subvention.pdf"
              target="_blank"
              download
            >
              Guidelines to apply for financial grant
            </a>
          )}
        </Stack>
        {i18n.language.startsWith("fr") ? (
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/PfPz3B0p058?si=OIj3gTv6f2jmk_s3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        ) : (
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/xl-u7HsA1xE?si=Zvzec1WHVO2ovkHG"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          ></iframe>
        )}
      </Paper>
      <Grid container>
        <Grid item xs>
          <Link
            component="button"
            variant="body1"
            sx={{ color: "#3d8514" }}
            onClick={() => {
              signup();
            }}
          >
            {t("want_signup", { ns: "login" })}
          </Link>
        </Grid>
        <Grid item>
          <Link
            component="button"
            variant="body1"
            sx={{ color: "#3d8514" }}
            onClick={() => {
              signin();
            }}
          >
            {t("want_signin", { ns: "login" })}
          </Link>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Box>
  );
};

export default Contact;
