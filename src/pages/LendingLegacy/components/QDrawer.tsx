import React, { useState, useEffect, useRef, useContext } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { Typography, Grid, IconButton, Paper } from '@material-ui/core'

import ArrowDownwardIcon from '@material-ui/icons/ChevronRight'
import { Step1RightRect } from '@boot/static/svg/js'
import Context from '@boot/legacy/context'

import { red } from '@material-ui/core/colors'
const useStyles = makeStyles(theme => ({
  drawer: {
    overflow: 'initial'
  },
  root: {
    width: 550,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
    display: 'flex',
    position: 'initial'
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

export default function QDrawer ({ state, setState, meta, step, nextStep, ...props }: {state: any, setState: any, meta: any, step: any, nextStep: any}) {
  const classes = useStyles()
  const { user } = useContext(Context)
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
            {meta.map((obj: any) => {
              return Object.values(obj).map(([num, label]: any) => {
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
                ;(step === 4 || user['name']) && nextStep()
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
