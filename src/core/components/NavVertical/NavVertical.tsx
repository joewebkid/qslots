import React, { FC, memo, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, Redirect } from "react-router-dom";
import { Drawer, IconButton, SvgIcon } from "@material-ui/core";
import { ReactComponent as LogoSvg } from "@boot/static/svg/logo.svg";
import { ROUTES } from "@core/routing";
import { ApiConnect, urlAuth } from "@boot/legacy/apiConnect";
import clsx from "clsx";
import { RouteValueProps } from "@core/routing/Routing.config";
import { clearTokenAction } from "@core/store/actions";
import { useNavVerticalStyle } from "./NavVertical.style";

export const NavVertical: FC = memo(() => {
  const dispatch = useDispatch();
  const classes = useNavVerticalStyle();
  const location = useLocation();

  const compareTo = useCallback(
    (route: RouteValueProps) => {
      if (route.path === location.pathname) {
        return route.icon;
      }
      return route.icon_out;
    },
    [location]
  );

  const handleClickLogout = (e: any) => {
    e.preventDefault();
    ApiConnect({
      name: "getData",
      url: urlAuth + `/user/auth/logout/`,
      objToGet: {},
      clickHandle: null,
      setterLoading: null,
      setterEssence: (temp: any) => {
        if (temp?.code === 200) {
          dispatch(clearTokenAction());
          <Redirect to={ROUTES.LANDING.path} />;
        }
      },
    });
  };

  const getControlLinks = useCallback(
    (position: RouteValueProps["position"]) =>
      Object.values(ROUTES)
        .filter((route) => route.position === position)
        .map((route, index) => (
          <Link
            key={index}
            to={route.path}
            onClick={route.name === "logout" ? handleClickLogout : () => null}
          >
            <IconButton className={classes.btnMenu} size="medium">
              {compareTo(route)}
            </IconButton>
          </Link>
        )),
    [location]
  );

  const contolToolbar = useMemo(
    () => (
      <div className={clsx(classes.rootBtnMenu, classes.btnMenuContainer)}>
        <div className={classes.btnMenuContainer}>{getControlLinks("top")}</div>
        <div className={classes.btnMenuContainer}>
          {getControlLinks("bottom")}
        </div>
      </div>
    ),
    [location]
  );

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer)}
      classes={{
        paper: clsx(classes.drawerClose, classes.rootDrawer),
      }}
    >
      <div className={classes.toolbar}>
        <Link to={ROUTES.HOME.path}>
          <IconButton>
            <SvgIcon component={LogoSvg} viewBox="0 0 31 31" fontSize="large" />
          </IconButton>
        </Link>
      </div>
      {contolToolbar}
    </Drawer>
  );
});
