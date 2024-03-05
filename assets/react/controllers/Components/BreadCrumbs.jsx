import React from "react";
import { useLocation, Link } from "react-router-dom";
import { tokens } from "../../utils/theme";
import { useTheme, Chip } from "@mui/material";
import { connect } from "react-redux";
import {
  removeMenuBread,
  clearMenuBread,
} from "./../redux/actions/configActions";

const BreadCrumbs = (props) => {
  let location = useLocation();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const pathname = location.pathname;

  const handleDelete = (e, item) => {
    props.removeMenuBread(item);
    e.preventDefault();
  };

  return (
    <nav
      aria-label="breadcrumb"
      style={{ backgroundColor: colors.primary[400] }}
      className="breadcrumb-container"
    >
      <ol className="breadcrumb">
        {pathname != "/" && (
          <li
            className="breadcrumb-item"
            key={"HomeStart"}
            onClick={() => props.clearMenuBread()}
          >
            <Link to="/">{props.t("home")}</Link>
          </li>
        )}
        {props.menus.map((menu, index) => {
          if (menu) {
            return (
              <li
                className={`breadcrumb-item ${pathname == menu.to && "active"}`}
                key={`breadcrumb${index}`}
              >
                <Link to={menu.to}>
                  <Chip
                    label={props.t(menu.label)}
                    onDelete={(e) => handleDelete(e, index)}
                    color={pathname == menu.to ? "secondary" : "primary"}
                    size="small"
                  />
                </Link>
              </li>
            );
          }
        })}
      </ol>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  menus: state.config.menuo,
});

const mapActionsToProps = {
  removeMenuBread,
  clearMenuBread,
};

export default connect(mapStateToProps, mapActionsToProps)(BreadCrumbs);
