import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        border: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: 26,
        borderRadius: 2,
    },
    value: {
        position: 'absolute',
        lineHeight: '24px',
        fontWeight: 600,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bar: {
        height: 10,
        width: 10,
        marginLeft: 4,
        borderRadius: '100%',
        '&.low': {
            backgroundColor: theme.palette.error.main,
        },
        '&.medium': {
            backgroundColor: '#efbb5aa3',
        },
        '&.high': {
            backgroundColor: theme.palette.success.main,
            color: 'white',
        },
    },
}));

interface ProgressBarProps {
    value: number;
}

export const ProgressBar = React.memo((props: ProgressBarProps) => {
    const { value } = props;
    const valueInPercent = value * 100;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.value}>
                {`${valueInPercent.toLocaleString()}%`}
                <div
                    className={clsx(classes.bar, {
                        low: valueInPercent < 30,
                        medium: valueInPercent >= 30 && valueInPercent <= 70,
                        high: valueInPercent > 70,
                    })}
                />
            </div>
        </div>
    );
});
