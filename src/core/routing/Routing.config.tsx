import React, { ReactNode } from "react";
import {
  AccountCircle,
  School,
  PieChart,
  Info,
  ExitToApp,
  Subscriptions,
  SubscriptionsOutlined,
  PieChartOutlined,
  AccountCircleOutlined,
  SchoolOutlined,
  InfoOutlined,
  ExitToAppOutlined,
} from "@material-ui/icons";

export interface RouteValueProps {
  path: string;
  name: string;
  icon: ReactNode;
  icon_out: ReactNode;
  position?: "top" | "bottom";
}

interface RoutesProps {
  [key: string]: RouteValueProps;
}

export const ROUTES: RoutesProps = {
  LANDING: {
    path: "/",
    name: "i18_main",
    icon: Info,
    icon_out: Info,
  },
  HOME: {
    path: "/home",
    name: "i18_main",
    icon: Info,
    icon_out: Info,
  },
  SIGNUP: {
    path: "/signup",
    name: "signup",
    icon: Info,
    icon_out: Info,
  },
  COURSE: {
    path: "/course",
    name: "course",
    position: "top",
    icon: <Subscriptions />,
    icon_out: <SubscriptionsOutlined />,
  },
  STATISTICS: {
    path: "/statistics",
    name: "statistics",
    position: "top",
    icon: <PieChart style={{ transform: "rotateZ(-180deg)" }} />,
    icon_out: <PieChartOutlined style={{ transform: "rotateZ(-180deg)" }} />,
  },
  SCHOOL: {
    path: "/knowledge",
    name: "school",
    position: "bottom",
    icon: <School />,
    icon_out: <SchoolOutlined />,
  },
  PROFILE: {
    path: "/profile",
    name: "profile",
    position: "bottom",
    icon: <AccountCircle />,
    icon_out: <AccountCircleOutlined />,
  },
  INFO: {
    path: "/statistics3",
    name: "info",
    position: "bottom",
    icon: <Info />,
    icon_out: <InfoOutlined />,
  },
  LOGOUT: {
    path: "/",
    name: "logout",
    position: "bottom",
    icon: <ExitToApp />,
    icon_out: <ExitToAppOutlined />,
  },
};
