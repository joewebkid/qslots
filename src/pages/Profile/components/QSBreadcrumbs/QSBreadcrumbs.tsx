import React, { FC, memo } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginTop: 70,
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export const QSBreadcrumbs: FC = memo(() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                <Link color="inherit" href="/">
                    Главная
                </Link>
                <Typography color="primary">Профиль</Typography>
            </Breadcrumbs>
        </div>
    );
});
