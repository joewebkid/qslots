import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import { grey } from '@material-ui/core/colors'
import { Grid } from '@material-ui/core'

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  backButton: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  },
  titleText: {
    textAlign: 'center'
  }
})

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, onBack, step, isBtn, ...other } = props
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
          {isBtn && <Button
            size='small'

            onClick={onBack}
            style={{
              position: 'absolute',
              color: grey[600],
              visibility: step === 0 ? 'hidden' : 'visible'
            }}
          >
            <KeyboardArrowLeft />
            {'Назад'}
          </Button>}
        <Grid container xs={12} style={{display: 'flex', justifyContent: 'center'}}>{children}</Grid>
    </MuiDialogTitle>
  )
})

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    overflow: 'hidden'
  }
}))(MuiDialogContent)

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions)

export { DialogContent, DialogActions, DialogTitle }
