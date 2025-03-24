import React, { useEffect, useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../utils/theme";
import FoundationIcon from "@mui/icons-material/Foundation";
import SourceIcon from "@mui/icons-material/Source";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { addMenuBread } from "./../redux/actions/configActions";
import CONSTANTS from "../../utils/Constants";

// hex to rgba converter
const hexToRgba = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      component={<Link to={to} />}
      icon={icon}
      active={window.location.pathname === to}
      onClick={(e) => setSelected(e, to, title)}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SideBar = (props) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelect] = useState("Dashboard");

  useEffect(()=>{
    setSelect(window.location.pathname);
  },[window.location.pathname])
  

  const setSelected = (item, to, title) => {
    if (to != "/") props.addMenuBread({ to, label: title });
    setSelect(item);
  };


  const menuItemStyles = {
    root: {
      fontSize: "13px",
      fontWeight: 400,
    },
    icon: {
      color: theme.palette.menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: theme.palette.menu.disabled.color,
      },
      [`&.${menuClasses.active}`]: {
        color: "#b6c8d9",
      },
    },
    SubMenuExpandIcon: {
      color: "#b6b7b9",
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(theme.palette.menu.menuContent, !isCollapsed ? 0.4 : 1)
          : "transparent",
      width: "300px",
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: theme.palette.menu.disabled.color,
      },
      [`&:hover`]: {
        backgroundColor: hexToRgba(theme.palette.menu.hover.backgroundColor, 1),
        color: theme.palette.menu.hover.color,
      },
      [`&.${menuClasses.active}`]: {
        backgroundColor: hexToRgba(
          theme.palette.menu.hover.backgroundColor,
          0.7
        ),
        color: theme.palette.menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        breakPoint="md"
        backgroundColor={hexToRgba(theme.palette.sidebar.backgroundColor, 1)}
        rootStyles={{
          color: theme.palette.sidebar.color,
        }}
      >
        <Menu menuItemStyles={menuItemStyles}>
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={colors.grey[100]}>
                  MINESEC
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`${CONSTANTS.BASE_URL}/images/logo_minesec.jpg`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h5"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {props.username}
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Item
              title={t("menu_compte")}
              to="/compteBancaire"
              icon={<AccountBalanceIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {Boolean(props.session) && (
              <Item
                title={t("menu_demande", { val: props.session.anneeScolaire })}
                to="/demande"
                icon={<CreateNewFolderIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            <Item
              title={t("menu_demandes")}
              to="/mydemandes"
              icon={<SourceIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={t("menu_structure")}
              to="/"
              icon={<FoundationIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.credentials.structure.name,
  roles: state.auth.credentials.role,
  session: state.auth.credentials.session,
  access_token: state.auth.access_token,
  menus: state.config.menuo,
});

const mapActionsToProps = { addMenuBread };

export default connect(mapStateToProps, mapActionsToProps)(SideBar);
