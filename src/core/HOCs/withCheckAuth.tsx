import React from 'react';
import {
    Redirect, useLocation, useRouteMatch,
} from 'react-router-dom';
import { ROUTES } from '@core/routing';
import { useSelector } from 'react-redux';
import { authSelector } from '@core/store';

export function withCheckAuth<T = any>(
    Component: React.FC<T>,
) {
    const WrappedComponent: React.FC<T> = (props) => {
        const location = useLocation();
        const signRoutes = [ROUTES.HOME.path];
        const isSignPageThere = signRoutes.some(useRouteMatch) || (location.pathname === '/');

        const { userToken } = useSelector(authSelector);

        if (!userToken && !isSignPageThere) {
            return <Redirect to={ROUTES.LANDING.path} />;
        }

        if (userToken && isSignPageThere) {
            return <Redirect to={ROUTES.COURSE.path} />;
        }

        return <Component {...props} />;
    };

    return WrappedComponent;
}
