import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

import { ReactComponent as LogoSvg } from '../style/logo.svg'
import SvgIcon from '@material-ui/core/SvgIcon'
import {
  SubscriptionsOutlined,
  AccountCircleOutlined,
  BurstModeOutlined,
  InfoOutlined,
  SchoolOutlined,
  PieChartOutlined,
  Subscriptions
} from '@material-ui/icons'

const drawerWidth = 80

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    width: 90
  },
  btnMenuContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: drawerWidth,
    margin: '0px auto'
  },
  rootBtnMenu: {
    flexGrow: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.palette.primary.main,
    margin: 0,
    maxWidth: '100%'
  },
  btnMenu: {
    color: theme.palette.primary.contrastText,
    margin: 8,
    padding: 16
  },
  rootDrawer: {
    boxShadow: theme.shadows[24],
    width: 90
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    border: 0,
    whiteSpace: 'nowrap'
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: 90,
    border: 0,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
    border: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

export default function MiniDrawer () {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, classes.rootDrawer, {
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx({
          [classes.drawerClose]: !open
        })
      }}
      style={{width: 90}}
    >
      <div
        className={classes.toolbar}
        style={{ justifyContent: 'center', background: 'white', height: 90 }}
      >
        <IconButton>
          <SvgIcon component={LogoSvg} viewBox='0 0 31 31' fontSize='large' />
        </IconButton>
      </div>
      <div className={clsx(classes.rootBtnMenu, classes.btnMenuContainer)}>
        <div className={classes.btnMenuContainer}>
          <IconButton className={classes.btnMenu}>
            <Subscriptions  fontSize='large' />
          </IconButton>
          <IconButton className={classes.btnMenu}>
            <PieChartOutlined fontSize='large' />
          </IconButton>

        </div>
        <div className={classes.btnMenuContainer} style={{paddingBottom: 90, justifyContent: "flex-end"}}>
        <IconButton className={classes.btnMenu} >
            <SchoolOutlined fontSize='large'/>
          </IconButton>
          <IconButton className={classes.btnMenu} >
            <AccountCircleOutlined fontSize='large' />
          </IconButton>
          <IconButton className={classes.btnMenu}>
            <InfoOutlined fontSize='large' />
          </IconButton>
        </div>
      </div>
    </Drawer>
  )
}
