import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { Typography, Grid, IconButton } from '@material-ui/core'

import ArrowDownwardIcon from '@material-ui/icons/ChevronRight'
import { Step1RightRect } from '@boot/static/svg/js'
import { useHistory, useRouteMatch } from 'react-router-dom'
const useStyles = makeStyles(theme => ({
  drawer: {
    overflow: 'initial'
  },
  root: {
    width: 600,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
    display: 'flex'
  },
  content: {
    width: 408,
    margin: 'auto'
  },
  btnSubscribe: {
    padding: '25px 24px',
    backgroundColor: theme.palette.primary.contrastText,
    margin: '73px auto 0px',
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText
    }
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
      backgroundColor: theme.palette.primary.main
    }
  }
}))

export default function QDrawer ({
  state,
  setState,
  setOpen,
  redirect_url,
  ...props
}) {
  const classes = useStyles()
  const history = useHistory()

  // const [state, setState] = useState(open)
  const btnRef = useRef(null)

  // setTimeout(() => {
  //   if (btnRef.current) {
  //     const parent = btnRef.current?.parentElement
  //     const backdrop = parent.parentElement.getElementsByClassName(
  //       'MuiBackdrop-root'
  //     )
  //     backdrop.length &&
  //       backdrop[0]?.setAttribute('style', 'backround-color: none')
  //     parent.classList.add('overfl__initial')
  //     // parent?.setAttribute('style', 'overflow: initial')
  //   }
  // }, [0])

  const [timer, setTimer] = useState(15)

  const toGoHref = () => {
    let a = document.createElement('a')
    a.target = '_blank'
    a.href = redirect_url
      ? `https://www.${redirect_url}`
      : 'https://www.qsolts.com/shl/'
    a.click()
    window.history.go('/course')
    // setTimeou t(() => a.click(), [0])
  }

  useEffect(() => {
    if (timer > 0)
      setTimeout(() => {
        setTimer(timer - 1)
      }, 1000)
    else {
      toGoHref()
    }
  }, [timer])

  return (
    <Drawer
      anchor={'right'}
      open={state}
      classes={{
        paper: classes.drawer
      }}
      onClose={() => setState(false)}
      // className={classes.drawer}
    >
      <IconButton
        className={classes.btnClose}
        size='medium'
        ref={btnRef}
        onClick={() => setState(false)}
      >
        <ArrowDownwardIcon />
      </IconButton>
      <div className={classes.root}>
        <div>
          <Step1RightRect
            fill={'white'}
            style={{
              position: 'absolute',
              top: '5%',
              opacity: 0.2,
              right: -46,
              zIndex: 0,
              width: 150,
              transform: 'scale(0.5)'
            }}
          />
          <Step1RightRect
            fill={'white'}
            style={{
              position: 'absolute',
              top: '60%',
              opacity: 0.2,
              right: 438,
              zIndex: 0,
              width: 250,
              transform: 'scale(0.3) rotate(-180deg)'
            }}
          />
        </div>
        <div className={classes.content}>
          <Typography variant='body1' align={'center'}>
            {'Система тестирования:'}
          </Typography>
          <Typography variant='h4' align={'center'} style={{ marginTop: 29 }}>
            {props.testSystemTitle}
          </Typography>
          <Typography
            variant='body1'
            align={'center'}
            style={{ marginTop: 92 }}
          >
            {'Подсистема тестирования:'}
          </Typography>
          <Typography variant='h4' align={'center'} style={{ marginTop: 29 }}>
            {props.testSubsystemTitle}
          </Typography>
          <Typography
            variant='body1'
            align={'center'}
            style={{ marginTop: 87 }}
          >
            {
              'К сожалению, сейчас мы не можем сформировать для вас курс Обратитесь за помощью к нашему эксперту'
            }
          </Typography>

          <Typography
            variant='h1'
            align={'center'}
            style={{ marginTop: 86, fontSize: 64 }}
          >
            {`00:${timer < 10 ? '0' + timer : timer}`}
          </Typography>
          <Typography
            variant='body1'
            align={'center'}
            style={{ marginTop: 28 }}
          >
            {'До перехода на сайт эксперта'}
          </Typography>
          <div style={{ display: 'flex' }}>
            <Button
              color='default'
              variant='test'
              className={classes.btnSubscribe}
              size='large'
              href={
                redirect_url
                  ? `https://www.${redirect_url}`
                  : 'https://www.qsolts.com/shl/'
              }
              onClick={() => window.history.go('/course')}
            >
              <Typography variant='body1'>{'Нужна помощь'}</Typography>
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  )
}
