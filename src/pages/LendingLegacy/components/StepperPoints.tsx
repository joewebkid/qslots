import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Check from '@material-ui/icons/Check'
import StepConnector from '@material-ui/core/StepConnector'
import { Typography } from '@material-ui/core'

const QontoConnector = withStyles(theme => ({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)'
  },
  active: {
    '& $line': {
      borderColor: theme.palette.primary.main
    }
  },
  completed: {
    '& $line': {
      borderColor: theme.palette.primary.main
    }
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1
  }
}))(StepConnector)

const useQontoStepIconStyles = makeStyles(theme => ({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center'
  },
  active: {
    color: theme.palette.primary.main
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor'
  },
  completed: {
    color: theme.palette.primary.main,
    zIndex: 1,
    fontSize: 18,
    fontWeight: 400
  }
}))

function QontoStepIcon (props: any) {
  const classes = useQontoStepIconStyles()
  const { active, completed } = props

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  )
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))

export default function CustomizedSteppers ({ steps, activeStep, ...props }: {steps: any, activeStep: any}) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
        style={{ padding: 8 }}
      >
        {steps.map((label: any) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>
              <Typography variant='body1' style={{ fontWeight: 400 }}>
                {label}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
