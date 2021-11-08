import React from 'react'
import { Typography, Button, AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DialogPay from './DialogPay'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export default function App ({ setOpen, setOpenSigin }: {setOpen: any, setOpenSigin: any}) {
  const classes = useStyles()

  return (
    <div>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography variant='h5' className={classes.title}>
            {'Q solution'}
          </Typography>
          <Button color='inherit' onClick={e => setOpen(true)}>
            Зарегистрироваться
          </Button>
          <Button color='inherit' onClick={e => setOpenSigin(true)}>

            Вход
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
