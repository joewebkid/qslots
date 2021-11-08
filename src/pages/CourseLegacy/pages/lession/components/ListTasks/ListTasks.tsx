import React, { useState, useEffect, useMemo } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  Radio,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
// @ts-ignore
import classnames from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    transition: '1s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  items: {
    borderLeftStyle: 'solid',
    borderLeftWidth: 0,
    transition: '0.1s'
  },
  succses: {
    borderLeftColor: theme.palette.success.main,
    borderLeftWidth: 4
  },
  error: {
    borderLeftColor: theme.palette.error.main,
    borderLeftWidth: 4
  }
}))

export const ListTasks = ({
  tasks,
  answer,
  setAnswer,
  storeAnswer,
  ...props
}: {
  tasks: any,
  answer: any,
  setAnswer: any,
  storeAnswer: any
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const controls = useMemo(
    () =>
      tasks.map((task: any) => (
        <ListItem
          key={task.id}
          role={undefined}
          dense
          className={classnames(
            classes.items,
            (answer || storeAnswer) &&
              (task.is_right_answer ? classes.succses : classes.error)
          )}
          button
          onClick={() => setAnswer(task.id)}
        >
          <ListItemIcon>
            <Radio
              color='primary'
              edge='start'
              style={{
                color:
                  (answer || storeAnswer) && task.is_right_answer
                    ? theme.palette.success.main
                    : theme.palette.primary.main
              }}
              checked={
                answer === task.id || (!answer && storeAnswer === task.id)
              }
              tabIndex={-1}
            />
          </ListItemIcon>
          <ListItemText style={{ textAlign: 'left' }}>
            <Typography
              style={{
                fontWeight:
                  answer === task.id || (!answer && storeAnswer === task.id)
                    ? 600
                    : 400
              }}
            >
              {task.label}
            </Typography>
          </ListItemText>
        </ListItem>
      )),
    [tasks, answer]
  )

  return <List className={classes.root}>{controls}</List>
}
