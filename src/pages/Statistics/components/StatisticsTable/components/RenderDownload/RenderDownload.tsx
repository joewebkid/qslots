import React, { useMemo } from 'react';
import { ResponceStatisticsProps } from '@core/api';
import {
    Tooltip,
    IconButton,
    Link,
    SvgIcon,
    makeStyles,
    Theme,
} from '@material-ui/core';
import { GridCellParams, GridCellValue } from '@material-ui/data-grid';
import { IconsStatistics } from '@boot/static/svg/statistics';

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        transition: '0.5s',
        color: theme.palette.grey[600],
        fontSize: 32,
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
}));

export function RenderDownload(paramValue: any) {
    const value = useMemo(
        () => paramValue as ResponceStatisticsProps['links'],
        [paramValue],
    );
    const classes = useStyles();
    const controlIcons = useMemo(
        () => value
            .map((obj) => {
                if (obj) {
                    const controlIcon = (
                        <Tooltip title={obj.label}>
                            <Link href={obj.link} target="_blank">
                                <IconButton>
                                    <SvgIcon
                                        component={
                                            IconsStatistics[obj.type]
                                        }
                                        className={classes.icon}
                                    />
                                </IconButton>
                            </Link>
                        </Tooltip>
                    );
                    return controlIcon;
                }
                return null;
            })
            .filter((obj) => obj),
        [value],
    );

    return <>{controlIcons}</>;
}
