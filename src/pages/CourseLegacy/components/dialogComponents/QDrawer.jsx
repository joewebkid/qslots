import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { Typography, Grid, IconButton } from '@material-ui/core'

import ArrowDownwardIcon from '@material-ui/icons/ChevronRight'
import { Step1RightRect } from '@boot/static/svg/js'
const useStyles = makeStyles(theme => ({
  drawer: {
    overflow: 'initial'
  },
  root: {
    width: 550,
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

export default function QDrawer ({ state, setState, meta, ...props }) {
  const classes = useStyles()
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

  // const [meta, setMeta] = useState({
  //   all: ['14 ', 'общих видеоуроков'],
  //   id1: ['5 ', 'видеоуроков по тесту Q Metrix Pro Работа с числовыми данными'],
  //   id2: [
  //     '5 ',
  //     'видеоуроков по тесту Q Metrix Pro Работа с текстовыми данными'
  //   ],
  //   id3: ['', 'Тренажер Q Metrix Pro Работа с числовыми данными'],
  //   id4: ['', 'Тренажер Q Metrix Pro Работа с текстовыми данными']
  // })

  return (
    <Drawer
      anchor={'right'}
      open={state}
      onClose={() => setState(false)}
      classes={{
        paper: classes.drawer
      }}
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
              right: 388,
              zIndex: 0,
              width: 250,
              transform: 'scale(0.3) rotate(-180deg)'
            }}
          />
        </div>
        <div className={classes.content}>
          <Typography variant='h2' align={'center'}>
            {'Курс включает:'}
          </Typography>
          <div style={{ marginTop: 38 }}>
            {meta.map(obj => {
              return Object.values(obj).map(([num, label]) => {
                return (
                  <Typography
                    variant='body1'
                    style={{ marginBottom: 15, lineHeight: 1.5 }}
                  >
                    {num && (
                      <Typography variant='h4' component='span'>
                        {`${num} `}
                      </Typography>
                    )}
                    {label}
                  </Typography>
                )
              })
            })}
            {/* {meta.map(([num, label]) => {
              return (
                <Typography
                  variant='body1'
                  style={{ marginBottom: 15, lineHeight: 1.5 }}
                >
                  {num && (
                    <Typography variant='h4' component='span'>
                      {`${num} `}
                    </Typography>
                  )}
                  {label}
                </Typography>
              )
            })} */}
          </div>
          <Typography
            variant='h1'
            align={'center'}
            style={{ marginTop: 28, fontSize: 64 }}
          >
            {'5000 руб.'}
          </Typography>
          <Typography
            variant='body1'
            align={'center'}
            style={{ marginTop: 28 }}
          >
            {'Доступ на месяц'}
          </Typography>
          <div style={{ display: 'flex' }}>
            <Button
              color='default'
              variant='text'
              onClick={() => {
                setState(false)
                props.nextStep()
              }}
              className={classes.btnSubscribe}
              size='large'
            >
              <Typography variant='body1'>{'Оплатить подписку'}</Typography>
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  )
}
