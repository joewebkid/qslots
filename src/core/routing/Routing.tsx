import React, { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import {
  CourseLegacy,
  KnowledgePage,
  LendingLegacy,
  StatisticsPage,
  ProfilePage,
} from "@pages/index";
import { ROUTES } from "./Routing.config";

export const Routing: FC = memo(() => (
  <Switch>
    <Route path={ROUTES.HOME.path}>
      <LendingLegacy />
    </Route>
    <Route path={ROUTES.COURSE.path}>
      <CourseLegacy />
    </Route>
    <Route path={ROUTES.STATISTICS.path}>
      <StatisticsPage />
    </Route>
    <Route exact path={ROUTES.LANDING.path}>
      <LendingLegacy />
    </Route>
    <Route exact path={ROUTES.PROFILE.path}>
      <ProfilePage />
    </Route>
    <Route exact path={ROUTES.SCHOOL.path}>
      <KnowledgePage />
    </Route>
    <Route>
      <LendingLegacy />
    </Route>
  </Switch>
));
