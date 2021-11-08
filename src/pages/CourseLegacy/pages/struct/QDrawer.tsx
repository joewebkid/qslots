import React, { useState, useEffect, useRef, useContext, useMemo } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {
    Typography,
    Grid,
    IconButton,
    Switch,
    FormControlLabel,
} from '@material-ui/core';

import ArrowDownwardIcon from '@material-ui/icons/ChevronRight';
import { Step1RightRect } from '@boot/static/svg/js';
import FFCircularLabel from '../../components/FFCircularLabel';
import { FFCirularCustom } from '../../components/FFCircularCustom';
import Context from '@boot/legacy/context';
const useStyles = makeStyles((theme) => ({
    drawer: {
        overflow: 'initial',
        zIndex: -1,
        width: 0,
    },
    root: {
        width: 550,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        flexGrow: 1,
        display: 'flex',
    },
    content: {
        width: 350,
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 640,
    },
    btnSubscribe: {
        minWidth: 272,
        padding: '25px 24px',
        backgroundColor: theme.palette.primary.contrastText,
        margin: '0px auto 28px',
        '&:hover': {
            backgroundColor: theme.palette.primary.contrastText,
        },
    },
    btnClose: {
        width: 36,
        height: 36,
        top: '50%',
        position: 'absolute',
        backgroundColor: theme.palette.primary.main,
        border: '1px solid white',
        color: 'white',
        left: -18,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
    },
}));

export default function QDrawer ({
    state,
    activeLession,
    idLession,
    setState,
    meta,
    ...props
}: {
    state: any,
    activeLession: any,
    idLession: any,
    setState: any,
    meta: any
}) {
    const classes = useStyles();
    // const [state, setState] = useState(open)
    const btnRef = useRef<any>(null);
    const { toGoActiveLession } = useContext(Context);
    setTimeout(() => {
        if (btnRef.current) {
            const backdrop = btnRef.current?.children[0];
            backdrop.setAttribute('style', 'display: none');
        }
    }, 0);

    const btnGoStydyVideo = useMemo(() => {
        let content = 'Начать обучение';
        if (activeLession.progress > 0) {
            content = 'Продолжить обучение';
        }
        return (
            <Button
                color="default"
                variant="text"
                onClick={() =>
                    toGoActiveLession(
                        !idLession ? activeLession.general : activeLession,
                    )
                }
                className={classes.btnSubscribe}
                size="large"
            >
                <Typography variant="body1">{content}</Typography>
            </Button>
        );
    }, [activeLession, idLession]);

    return (
        <Drawer
            anchor={'right'}
            open={state}
            className={classes.drawer}
            ref={btnRef}
        >
            <div className={classes.root}>
                <div>
                    <Step1RightRect
                        fill={'white'}
                        style={{
                            position: 'absolute',
                            top: '5%',
                            opacity: 0.2,
                            right: -29,
                            zIndex: 0,
                            width: 118,
                            transform: 'scale(0.5)',
                        }}
                    />
                    <Step1RightRect
                        fill={'white'}
                        style={{
                            position: 'absolute',
                            top: '60%',
                            opacity: 0.2,
                            right: 388,
                            zIndex: 0,
                            width: 250,
                            transform: 'scale(0.3) rotate(-180deg)',
                        }}
                    />
                </div>
                <div className={classes.content}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {btnGoStydyVideo}
                        {idLession && idLession !== 'general' ? (
                            <div
                                style={{
                                    margin: '0px auto 0px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                            >
                                <Button
                                    disabled={activeLession.progress !== 100}
                                    color="default"
                                    variant="text"
                                    onClick={() => {}}
                                    className={classes.btnSubscribe}
                                    style={{ margin: '0px auto' }}
                                    size="large"
                                >
                                    <Typography variant="body1">
                                        {'Тренировка'}
                                    </Typography>
                                </Button>
                                <div>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                name="checkedA"
                                                color="default"
                                            />
                                        }
                                        label={
                                            <Typography
                                                variant="body1"
                                                style={{
                                                    fontSize: 12,
                                                    color: '#171716',
                                                }}
                                            >
                                                {
                                                    'Тест с верификацией/прокторингом'
                                                }
                                            </Typography>
                                        }
                                    />
                                </div>
                            </div>
                        ) : null}
                    </div>
                    <Typography
                        variant="body1"
                        align="left"
                        style={{ lineHeight: 1.2 }}
                        // style={{ marginTop: 140 }}
                    >
                        {activeLession.subtitle}
                    </Typography>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            // margin: '180px 0px 0px 00px'
                        }}
                    >
                        {!isNaN(
                            activeLession?.video_ok / activeLession?.video_all,
                        ) ? (
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <FFCirularCustom
                                    size={100}
                                    value={
                                        (activeLession.video_ok /
                                            activeLession.video_all) *
                                        100
                                    }
                                    label={`${activeLession.video_ok} из ${activeLession.video_all}`}
                                />
                                <Typography
                                    align="center"
                                    style={{ marginTop: 5 }}
                                >
                                    {'Видеоуроков'}
                                </Typography>
                            </div>
                        ) : null}
                        {idLession !== 'general' &&
                        !isNaN(
                            activeLession?.attempt_ok /
                                activeLession?.attempt_all,
                        ) ? (
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                }}
                            >
                                <FFCirularCustom
                                    size={100}
                                    value={
                                        (activeLession.attempt_ok /
                                            activeLession.attempt_all) *
                                        100
                                    }
                                    label={`${activeLession.attempt_ok} из ${activeLession.attempt_all}`}
                                />
                                <Typography
                                    align="center"
                                    style={{ marginTop: 5 }}
                                >
                                    {'Успешных попыток'}
                                </Typography>
                            </div>
                        ) : null}
                    </div>
                    {/* <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '200px 30px 0px 30px'
            }}
          >
            <FFCirularCustom size={100} value={40} label={'2 из 5'} />
            <FFCirularCustom size={100} value={40} label={'2 из 5'} />
          </div> */}
                </div>
            </div>
        </Drawer>
    );
}
