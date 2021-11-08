import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import FFCircularLabel from './FFCircularLabel'
import { Typography, Box } from '@material-ui/core'

// Inspired by the former Facebook spinners.
const useStylesFacebook = makeStyles(theme => ({
  root: {
    position: 'relative',
	display: 'inline-flex'
    //   background: 'white'
  },
  bottom: {
    color: '#171716'
  },
  top: {
    color: 'white',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0
  },
  circle: {
    strokeLinecap: 'round'
  }
}))

function FFCirularCustom ({ value, size, label, ...props }) {
  const classes = useStylesFacebook()
  return (
    <div className={classes.root}>
      <CircularProgress
        variant='static'
        className={classes.bottom}
        size={size}
        thickness={1.5}
        {...props}
        value={100}
      />
      <CircularProgress
        variant='static'
        className={classes.top}
        value={value}
        size={size}
        thickness={2.5}
        {...props}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position='absolute'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        <Typography align='center' variant='body1' component='p'>
          {label}
        </Typography>
      </Box>
    </div>
  )
}

export { FFCirularCustom }
