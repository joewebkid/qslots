import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { CoursePage } from './FFMain';

import { Typography } from '@material-ui/core';

export const CourseLegacy = (props: any) => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={path} component={() => <CoursePage />} />
            <Route exact>
                <Typography variant="h2" color="primary" align="center">
                    {' '}
                    404 page not found
                </Typography>
            </Route>
        </Switch>
    );
};
