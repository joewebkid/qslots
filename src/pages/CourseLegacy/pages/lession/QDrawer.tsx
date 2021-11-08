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
    Tooltip,
} from '@material-ui/core';

import ArrowDownwardIcon from '@material-ui/icons/ChevronRight';
import { Step1RightRect } from '@boot/static/svg/js';
import FFCircularLabel from '../../components/FFCircularLabel';
import { FFCirularCustom } from '../../components/FFCircularCustom';
import Context from '@boot/legacy/context';
import {
    ChevronLeft,
    ChevronRight,
    Storage,
    ChevronRightRounded,
    ChevronRightOutlined,
    GradeOutlined,
} from '@material-ui/icons';
import { ListTasks } from './components';
const useStyles = makeStyles((theme) => ({
    drawer: {
        overflow: 'initial',
        zIndex: -1,
        width: 0,
    },
    root: {
        width: 550,
        // backgroundColor: theme.palette.primary.main,
        color: '#171176',
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
        // marginTop: 155
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
        margin: 8,
        backgroundColor: theme.palette.primary.main,
        border: '1px solid white',
        color: 'white',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        '&:disabled': {
            backgroundColor: theme.palette.grey[400],
            color: 'white',
        },
    },
}));

export default function QDrawer ({
    activeTheme,
    indexComplite,
    setIndexComplite,
    lessonsCount,
    lessons,
    finishBlock,
    ...props
}: {
    activeTheme: any,
    indexComplite: any,
    setIndexComplite: any,
    lessonsCount: any,
    lessons: any,
    finishBlock: any
}) {
    const classes = useStyles();
    const btnRef = useRef<any>(null);

    const { toGoActiveLession } = useContext(Context);
    const [indexCopliteTests, setIndexCompliteTests] = useState(0);
    const { questions } = activeTheme;
    const [answer, setAnswer] = useState(null);
    const [isRight, setIsRight] = useState(false);
    const [listAnswer, setListAnswer] = useState(
        Array(questions.length).fill(null),
    );
    setTimeout(() => {
        if (btnRef.current) {
            const backdrop = btnRef.current?.children[0];
            backdrop.setAttribute('style', 'display: none');
        }
    }, 0);

    useEffect(() => {
        setIndexCompliteTests(0);
        setListAnswer(Array(questions.length).fill(null));
    }, [indexComplite]);

    useEffect(() => {
        if (answer) listAnswer[indexCopliteTests] = answer;
        setListAnswer([...listAnswer]);
        const right = questions[indexCopliteTests].answer;
        if (right === answer) {
            setIsRight(true);
        } else {
            setIsRight(false);
        }
    }, [answer]);

    useEffect(() => {
        setAnswer(null);
    }, [indexCopliteTests]);

    const btnNextQestion = useMemo(
        () => (
            <IconBtn
                disabled={!isRight}
                action={() => setIndexCompliteTests(indexCopliteTests + 1)}
                className={classes.btnClose}
                icon={
                    <Tooltip title="Следующий вопрос">
                        <ChevronRight />
                    </Tooltip>
                }
            />
        ),
        [isRight],
    );

    const btnPrevQuestion = useMemo(() => {
        const isDisable = indexComplite === 0 && indexCopliteTests === 0;
        const content =
            indexCopliteTests !== 0 ? 'Предыдущий вопрос' : 'Предыдуший урок';
        const clickPrevData = () => {
            if (indexCopliteTests === 0) {
                setIndexComplite(indexComplite - 1);
            } else {
                setIndexCompliteTests(indexCopliteTests - 1);
            }
        };
        return (
            <IconBtn
                disabled={isDisable}
                action={clickPrevData}
                className={classes.btnClose}
                icon={
                    <Tooltip title={content}>
                        <ChevronLeft />
                    </Tooltip>
                }
            />
        );
    }, [indexComplite, indexCopliteTests]);

    const btnFinishBlock = useMemo(
        () => (
            <IconBtn
                disabled={!isRight}
                action={() => finishBlock(indexComplite)}
                className={classes.btnClose}
                icon={
                    <Tooltip title="Завершить блок">
                        <GradeOutlined />
                    </Tooltip>
                }
            />
        ),
        [isRight],
    );

    return (
        <Drawer
            anchor={'right'}
            open={true}
            className={classes.drawer}
            ref={btnRef}
        >
            <div className={classes.root}>
                <div className={classes.content}>
                    <div>
                        <Typography
                            variant="h6"
                            align="left"
                            style={{ marginBottom: 50, fontWeight: 600 }}
                        >{`Ответьте на вопросы ${indexCopliteTests + 1}/${
                            questions.length
                        } :`}</Typography>
                        <Typography
                            variant="body2"
                            align="left"
                            style={{ marginBottom: 70 }}
                        >
                            {questions[indexCopliteTests]?.label}
                        </Typography>
                        <ListTasks
                            tasks={questions[indexCopliteTests]?.variants}
                            setAnswer={setAnswer}
                            answer={answer}
                            storeAnswer={listAnswer[indexCopliteTests]}
                        />
                    </div>

                    <div
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <IconBtn
                            action={() => toGoActiveLession(null)}
                            className={classes.btnClose}
                            icon={<Tooltip title="Структура курса">
                                <Storage />
                            </Tooltip>}
                        />

                        {btnPrevQuestion}
                        {indexCopliteTests === questions.length - 1 ? (
                            lessonsCount > indexComplite + 1 ? (
                                <IconBtn
                                    disabled={
                                        !answer &&
                                        !listAnswer[indexCopliteTests]
                                    }
                                    action={() =>
                                        setIndexComplite(indexComplite + 1)
                                    }
                                    className={classes.btnClose}
                                    icon={
                                        <Tooltip title="Следующий урок">
                                            <ChevronRightOutlined />
                                        </Tooltip>
                                    }
                                />
                            ) : (
                                btnFinishBlock
                            )
                        ) : (
                            btnNextQestion
                        )}
                    </div>
                </div>
            </div>
        </Drawer>
    );
}

const IconBtn = ({
    action = null,
    className = null,
    icon = null,
    disabled = false,
}: {
    action: any,
    className: any,
    icon: any,
    disabled?: any
}) => {
    return (
        <IconButton
            className={className}
            size="medium"
            onClick={action}
            disabled={disabled}
        >
            {icon ?? <ArrowDownwardIcon />}
        </IconButton>
    );
};
