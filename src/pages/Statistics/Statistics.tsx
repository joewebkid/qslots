import { NavVertical } from '@core/components';
import { withCheckAuth } from '@core/HOCs';
import { getStatisticsThunk } from '@core/store/actions';
import { makeStyles, Container } from '@material-ui/core';
import React, { FC, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { QSBreadcrumbs, StatisticsTable } from './components';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexGrow: 1,
        '& > div:nth-child(2)': {
            display: 'flex',
            flexDirection: 'column',
            '& div:nth-child(2)': {
                flexGrow: 1,
            },
        },
        '& *': {
            fontWeight: 400,
        },
    },
    content: {
        display: 'flex',
        flexGrow: 1,
        marginTop: 64,
        marginBottom: 64,
    },
});

const StatisticsComponent: FC = memo(() => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStatisticsThunk());
    }, []);

    return (
        <div className={classes.root}>
            <NavVertical />
            <Container maxWidth="lg">
                <QSBreadcrumbs />
                <div className={classes.content}>
                    <StatisticsTable />
                </div>
            </Container>
        </div>
    );
});

export const StatisticsPage = withCheckAuth(StatisticsComponent);
