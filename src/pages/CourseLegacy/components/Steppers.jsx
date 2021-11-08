import React, { useCallback, useRef, useMemo } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Typography, Avatar, StepConnector, Grid } from '@material-ui/core';
import { ChevronRight } from '@material-ui/icons';
import clsx from 'clsx';
import { useEffect } from 'react';
const QontoConnector = withStyles({
    root: {
        padding: 0,
        marginLeft: 9,
    },
    alternativeLabel: {
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
        position: 'relative',
        borderColor: 'red',
        borderWidth: 6,
        borderLeft: '4px solid blue',
        // borderTopWidth: 3,
        borderRadius: 1,
    },
    active: {
        '& $line': {
            borderColor: '#ccc',
        },
    },
    completed: {
        '& $line': {
            borderColor: '#ccc',
        },
    },
    line: {
        borderWidth: 3,
        borderLeftWidth: 3,
        borderRadius: 1,
        // transform: 'translateX(-4px)'
    },
})(StepConnector);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 200,
        overflow: 'overlay',
        borderRadius: 16,
        marginTop: 16,
    },
    complete: {
        backgroundColor: 'rgba(255,102,82,0.5)',
        backgroundBlendMode: 'multiply',
        filter: 'none',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
    step: {
        margin: '8px 0px',
    },
    videoPreview: {
        borderRadius: 8,
        backgroundSize: 'contain',
        height: 60,
    },
    iconStepper: {},
}));

const useStepIconStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        position: 'relative',
        left: -10,
        color: 'gray',
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 600,
    },
    active: {
        backgroundColor: theme.palette.primary.light,
        color: '#fff',
    },
    completed: {
        backgroundColor: '#ccc',
    },
}));

const StepIcon = (props) => {
    const classes = useStepIconStyles();
    const { active, completed } = props;
    let text = String(props.icon);

    text.length < 2 && (text = '0' + text);

    return (
        <Avatar
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {!active ? text : <ChevronRight fontSize={'large'} />}
        </Avatar>
    );
};

export default function VerticalLinearStepper ({
    activeStep,
    steps,
    setIndexComplite,
    video_ok,
    ...props
}) {
    const classes = useStyles();

    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo(0, activeStep * 80);
        }
    }, [activeStep]);

    const clickNextVideoHandle = useCallback(
        (index) => {
            if (video_ok >= index) {
                setIndexComplite(index);
            }
        },
        [activeStep, video_ok],
    );

    const colorText = useCallback(
        (index) => {
            if (index < activeStep) {
                return 'disabled';
            }
            return 'primary';
        },
        [activeStep],
    );

    return (
        <Paper elevation={8} className={classes.root} ref={ref}>
            <Stepper
                style={{ padding: '8px 48px' }}
                activeStep={activeStep}
                orientation="vertical"
                connector={<QontoConnector />}
            >
                {steps.map((obj, index) => (
                    <Step
                        onClick={() => clickNextVideoHandle(index)}
                        style={{ cursor: video_ok >= index && 'pointer' }}
                        key={obj?.label}
                        color={colorText(index)}
                    >
                        <StepLabel
                            StepIconComponent={StepIcon}
                            color={colorText(index)}
                            className={classes.step}
                        >
                            <Grid container>
                                <Grid
                                    item
                                    xs={10}
                                    style={{ alignSelf: 'center' }}
                                >
                                    <Typography
                                        color={
                                            index === activeStep
                                                ? 'primary'
                                                : ''
                                        }
                                        variant="body2"
                                    >
                                        {obj?.label}
                                    </Typography>
                                    <Typography
                                        color="inherit"
                                        variant="subtitle1"
                                    >
                                        {`Время урока ~ ${obj.duration_min} минут`}
                                    </Typography>
                                </Grid>
                                <Grid
                                    style={{
                                        backgroundImage: `url(${obj.mini_cover})`,
                                        cursor: video_ok >= index && 'pointer',
                                    }}
                                    className={[
                                        classes.videoPreview,
                                        video_ok >= index && classes.complete,
                                    ].join(' ')}
                                    onClick={() => clickNextVideoHandle(index)}
                                ></Grid>
                            </Grid>
                        </StepLabel>
                        <StepContent></StepContent>
                    </Step>
                ))}
            </Stepper>
        </Paper>
    );
}

// import React from 'react'
// import { makeStyles, withStyles } from '@material-ui/core/styles'
// import Stepper from '@material-ui/core/Stepper'
// import Step from '@material-ui/core/Step'
// import StepLabel from '@material-ui/core/StepLabel'
// import StepContent from '@material-ui/core/StepContent'
// import Button from '@material-ui/core/Button'
// import Paper from '@material-ui/core/Paper'
// import Typography from '@material-ui/core/Typography'
// import Check from '@material-ui/icons/Check'
// import SettingsIcon from '@material-ui/icons/Settings'
// import { ChevronRight } from '@material-ui/icons'
// import VideoLabelIcon from '@material-ui/icons/VideoLabel'
// import { Avatar, StepConnector } from '@material-ui/core'
// import clsx from 'clsx'

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%'
//   },
//   button: {
//     marginTop: theme.spacing(1),
//     marginRight: theme.spacing(1)
//   },
//   actionsContainer: {
//     marginBottom: theme.spacing(2)
//   },
//   resetContainer: {
//     padding: theme.spacing(3)
//   }
// }))

// const useColorlibStepIconStyles = makeStyles({
//   root: {
//     backgroundColor: '#ccc',
//     zIndex: 1,
//     position: 'relative',
//     left: -22,
//     color: '#fff',
//     display: 'flex',
//     borderRadius: '50%',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   active: {
//     backgroundColor: 'rgb(242,113,33)'
//       // 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
//     // boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)"
//   },
//   completed: {
//     backgroundColor: 'gray'
//       // 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
//   }
// })

// export default function VerticalLinearStepper () {
//   const classes = useStyles()
//   const [activeStep, setActiveStep] = React.useState(0)
//   const steps = getSteps()

//   const IconQ = props => {
//     const classes = useColorlibStepIconStyles()
//     const { active, completed } = props
//     // const int = Array(3).fill(1).reduce((result, _, i) => {
//     //   result[i] =
//     // }, {})
//     const icons = {
//       1: <Avatar>{activeStep}</Avatar>,
//       2: <ChevronRight />,
//       3: <VideoLabelIcon />
//     }

//     return (
//       <Avatar
//         className={clsx(classes.root, {
//           [classes.active]: active,
//           [classes.completed]: completed
//         })}
//       >
//         {!active ? props.icon : <ChevronRight fontSize={'large'} />}
//       </Avatar>
//     )
//   }

//   const handleNext = () => {
//     setActiveStep(prevActiveStep => prevActiveStep + 1)
//   }

//   const handleBack = () => {
//     setActiveStep(prevActiveStep => prevActiveStep - 1)
//   }

//   const handleReset = () => {
//     setActiveStep(0)
//   }

//   return (
//     <Paper className={classes.root}>
//       <Stepper
//         activeStep={activeStep}
//         orientation='vertical'
//         connector={<QontoConnector />}
//       >
//         {steps.map((label, index) => (
//           <Step
//             key={label}
//             style={{
//               borderLeft: '4px solid red',
//               position: 'relative',
//               left: 11
//             }}
//           >
//             <StepLabel StepIconComponent={IconQ}>{label}</StepLabel>
//             <StepContent style={{ border: 0 }}>
//               <Typography>{getStepContent(index)}</Typography>
//               <div className={classes.actionsContainer}>
//                 <div>
//                   <Button
//                     disabled={activeStep === 0}
//                     onClick={handleBack}
//                     className={classes.button}
//                   >
//                     Back
//                   </Button>
//                   <Button
//                     variant='contained'
//                     color='primary'
//                     onClick={handleNext}
//                     className={classes.button}
//                   >
//                     {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//                   </Button>
//                 </div>
//               </div>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length && (
//         <Paper square elevation={0} className={classes.resetContainer}>
//           <Typography>All steps completed - you&apos;re finished</Typography>
//           <Button onClick={handleReset} className={classes.button}>
//             Reset
//           </Button>
//         </Paper>
//       )}
//     </Paper>
//   )
// }
