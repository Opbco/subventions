import React, { useState } from "react";
import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { tokens } from "./../../utils/theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import TranslateIcon from "@mui/icons-material/Translate";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import { logoutUser } from "./../redux/actions/UserActions";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { connect } from "react-redux";
import { changeMode } from "./../redux/actions/configActions";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import CONSTANTS from "../../utils/Constants";
import Marquee from "react-fast-marquee";
import { format } from "date-fns";

const Topbar = (props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
          sx={{ maxWidth: "650px" }}
        >
          <Marquee>
            <Typography variant="h4">
              {Boolean(props.user.session)
                ? t("active_session", {
                    ns: "common",
                    annee: new Date(props.user.session.dateOpen.date).getFullYear(),
                    dateO: format(
                      new Date(props.user.session.dateOpen.date),
                      "dd MMM yyyy"
                    ),
                    dateC: format(
                      new Date(props.user.session.dateClosed.date),
                      "dd MMM yyyy"
                    ),
                  })
                : t("session_absent")}
            </Typography>
          </Marquee>
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <IconButton onClick={() => props.changeMode(theme.palette.mode)}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Tooltip title="Account settings">
              <Avatar
                alt="profile-user"
                src={`${CONSTANTS.BASE_URL}/images/avatar.webp`}
                sx={{ width: 32, height: 32 }}
              >
                {props.user.username}
              </Avatar>
            </Tooltip>
          </IconButton>

          <IconButton
            color="secondary"
            onClick={() =>
              i18n.changeLanguage(i18n.language.startsWith("fr") ? "en" : "fr")
            }
          >
            <Tooltip title={t("change_language")}>
            <Typography variant="h3">{i18n.language.startsWith("fr") ? " EN" : " FR"}</Typography>
            </Tooltip>
          </IconButton>
        </Box>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={() => props.logoutUser()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {t("logout")}
        </MenuItem>
      </Menu>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.credentials,
});

const mapActionsToProps = {
  changeMode,
  logoutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Topbar);
