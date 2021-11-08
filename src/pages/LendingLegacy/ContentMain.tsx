import React from 'react'
//
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Link, Paper, Typography } from '@material-ui/core'
//
import FFCard from './components/FFCard'
//
import { labelPath } from './metaData'
//

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

const ContentMain = () => {
  const classes = useStyles()

  return (
    <Grid
      container
      direction='row'
      className={classes.root}
      style={{ gap: 8, padding: 8 }}
    >
      <Paper
        className={classes.root}
        elevation={2}
        style={{ gap: 32, padding: 32, display: 'flex' }}
      >
        {['admin', 'user'].map(nameCard => {
          return (
            <Grid item xs={6} className={classes.root}>
              <FFCard
                toGo={null}
                title={(labelPath as any)[nameCard].label}
                content={(labelPath as any)[nameCard].content}
                image={(labelPath as any)[nameCard].image}
              />
            </Grid>
          )
        })}
      </Paper>
    </Grid>
  )
}

export default ContentMain
