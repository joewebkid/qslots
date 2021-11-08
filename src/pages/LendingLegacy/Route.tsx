import React, {FC} from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { LendingPage } from './FFMain';

export const LendingLegacy: FC = (props: any) => {
    const {path} = useRouteMatch();
    return (
        <Switch>
            <Route
                exact
                path={path}
                component={() => <LendingPage history={props.history} />}
            />

            <Route exact>
                <h1>page not found</h1>
            </Route>
        </Switch>
    );
};
