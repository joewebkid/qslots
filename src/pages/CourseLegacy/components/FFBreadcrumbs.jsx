import React, { useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useHistory } from 'react-router-dom'
import Context from '@boot/legacy/context'

const useStyles = makeStyles(theme => ({
  root: {
    cursor: 'pointer',
    '& > * + *': {
      marginTop: theme.spacing(2),
      cursor: 'pointer'
    }
  }
}))

export default function CustomSeparator ({
  path,
  labelTheme,
  labelLession,
  ...props
}) {
  const classes = useStyles()

  const { toGoActiveLession } = useContext(Context)
  const labelPath = {
    '/': { label: 'Главная', href: '/' },
    course: { label: 'Список курсов', href: '/course' },
    lessons: { label: labelLession },
    theme: { label: labelTheme }
  }

  const clickPath = () => {
    toGoActiveLession(null)
  }

  const createBreadcrumbs = () => {
    const lstPath = path.split('/')
    return (
      <Breadcrumbs
        aria-label='breadcrumb'
        separator={<NavigateNextIcon fontSize='small' />}
      >
        {lstPath.map((tmpPath, index) => {
          const resPath = tmpPath === '' ? '/' : tmpPath
          if (index === lstPath.length - 1) {
            return (
              <Typography color='primary'>
                {labelPath[resPath]?.label}
              </Typography>
            )
          } else {
            return (
              <Link color='inherit' href={labelPath[resPath].href} onClick={clickPath}>
                {labelPath[resPath]?.label}
              </Link>
            )
          }
        })}
      </Breadcrumbs>
    )
  }

  return (
    <div className={classes.root} style={{ marginTop: 70 }}>
      {createBreadcrumbs()}
    </div>
  )
}
