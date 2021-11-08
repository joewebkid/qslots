import { NavVertical } from '@core/components';
import { withCheckAuth } from '@core/HOCs';
import { Container, makeStyles } from '@material-ui/core';
import React, { FC, memo } from 'react';
import { QSBreadcrumbs, ProfileForm } from './components';

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

const ProfileComponent: FC = memo(() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <NavVertical />
            <Container maxWidth="lg">
                <QSBreadcrumbs />
                <div className={classes.content}>
                    <ProfileForm />
                </div>
            </Container>
        </div>
    );
});

export const ProfilePage = withCheckAuth(ProfileComponent);
