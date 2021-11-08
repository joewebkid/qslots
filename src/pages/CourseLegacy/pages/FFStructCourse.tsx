import React, { useState, useEffect } from 'react';
import FFCard from './struct/FFCard';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import Context from '@boot/legacy/context';
import QDrawer from './struct/QDrawer';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
    is_active: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width: 288,
    },
    root: {
        marginTop: 64,
        position: 'relative',
        // flexGrow: 1,
        display: 'flex',
        '& #temp': {
            // maxHeight: 388,
            transition: '0.1s',
            '& div': {
                backgroundColor: '#D9D9D9',
                transition: '0.2s',
                color: '#525151',
                // height: 97,
                borderRadius: '0 8px 8px 0',
                width: 266,
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover ': {
                    backgroundColor: theme.palette.primary.light,
                    // color: 'white',
                    width: 288,
                },
            },
        },
    },
}));

const GENERAL = 'general';

export default function FFStructCourse ({ ...props }) {
    const classes = useStyles();
    const theme = useTheme();

    const { activeCourse, struct } = useContext(Context);
    const [activeLession, setActiveLession] = useState(struct);

    const [id, setId] = useState<any>(null);
    const is_active = {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        width: 288,
    };

    const lenEmpty = 4 - 1 - (activeCourse?.tests?.length || 0);

    const { enqueueSnackbar } = useSnackbar();
    const snackBar = (variant: any, msg: any) => {
        enqueueSnackbar(
            msg,
            { 
                variant,
                anchorOrigin: { vertical: 'bottom', horizontal: 'center' }
            }
        );
    };

    useEffect(() => {
        switch (id) {
            case GENERAL:
                setActiveLession(struct.general);
                break;
            default:
                setActiveLession(struct?.tests[id!] ?? struct);
                break;
        }
    }, [id]);

    const clickActiveTest = (id: any) => {
        if (id !== GENERAL && struct[GENERAL]?.progress === 100) {
            setId(id);
        } else if (id === GENERAL) {
            setId(id);
        } else {
            setId(GENERAL);
            snackBar('info', 'Сначала требуется пройти блок введение');
        }
    };

    return (
        <div className={classes.root}>
            <FFCard img={activeCourse.url_pic} index={2} />
            <div id="temp">
                <Typography
                    variant="body2"
                    component={'div'}
                    style={id === GENERAL ? is_active : undefined}
                    onClick={() => clickActiveTest(GENERAL)}
                >
                    {'Введение'}
                </Typography>
                {activeCourse?.tests?.map((obj: any) => (
                    <Typography
                        variant="body2"
                        component={'div'}
                        style={id === obj.id ? is_active : undefined}
                        onClick={() => clickActiveTest(obj.id)}
                    >
                        {obj.label}
                    </Typography>
                ))}
                {Array(lenEmpty).fill(
                    <Typography
                        variant="body2"
                        component={'div'}
                        style={{ opacity: 0 }}
                    />,
                )}
            </div>

            <QDrawer setState={undefined} meta={undefined} state={true} {...{ activeLession }} idLession={id} />
        </div>
    );
}
