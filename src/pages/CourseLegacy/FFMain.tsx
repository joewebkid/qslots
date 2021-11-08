import React, { useContext } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import { Container, Typography, CircularProgress } from '@material-ui/core'
import Context from '@boot/legacy/context'
import {NavVertical} from '@core/components'

import {
  FFCarousel,
  FFStructCourse,
  FFDialogAddCourse,
  FFLession
} from './pages/index'
import FFBreadcrumbs from './components/FFBreadcrumbs'
import { useEffect } from 'react'
import { ApiConnect, urlAuth } from '@boot/legacy/apiConnect'
import { useState } from 'react'
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom'
import {withCheckAuth} from '@core/HOCs'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    '& div:nth-child(2)': {
      display: 'flex',
      flexDirection: 'column',
      '& div:nth-child(2)': {
        flexGrow: 1
      }
    }
  }
}))

 function CourseComponent () {
  const classes = useStyles()
  const history = useHistory()

  const root = history.location.pathname
  const [path, setPath] = useState(root)
  const [activeCourse, setActiveCourse] = useState<any>(null)
  const [courses, setCourses] = useState([])
  const [struct, setStruct] = useState(null)
  const [activeLession, setActiveLession] = useState<any>(null)

  useEffect(() => {
    ApiConnect({
      name: 'getData',
      url: `${urlAuth}/course/list/`,
      setterEssence: (temp: any) => {
        setCourses(temp?.obj && temp?.obj?.length ? temp.obj : [])
      },
      clickHandle: null,
      setterLoading: null
    })
  }, [])

  const toGoActiveCourse = (course: any) => {
    setActiveCourse(course)
    if (course?.id !== 'new') {
      ApiConnect({
        name: 'getData',
        url: `${urlAuth}/course/structure/?course_id=${course.id}`,
        setterEssence: setStruct,
        clickHandle: null,
        setterLoading: null
      })
      setPath(`${root}/lessons`)
    } else {
      setPath(root)
    }
  }

  const toGoActiveLession = (lession: any) => {
    setActiveLession(lession)
    if (lession && activeCourse?.id !== 'new') setPath(`${root}/lessons/theme`)
    else if (activeCourse?.id !== 'new') setPath(`${root}/lessons`)
    else setPath(root)
  }

  const update = () => {
    ApiConnect({
      name: 'getData',
      url: `${urlAuth}/course/structure/?course_id=${activeCourse?.id}`,
      setterEssence: setStruct,
      clickHandle: null,
      setterLoading: null
    })
  }

  const routeComponent = () => {
    if (activeLession) {
      return <FFLession update={update} />
    }
    if (activeCourse) {
      if (activeCourse?.id === 'new') {
        return (
          <>
            <FFCarousel />
            <FFDialogAddCourse open={undefined} />
          </>
        )
      }
      if (struct) return <FFStructCourse />
      return <CircularProgress />
    }
    return <FFCarousel />
  }

  return (
    <Context.Provider
      value={{
        toGoActiveCourse,
        activeCourse,
        courses,
        struct,
        toGoActiveLession,
        activeLession
      }}
    >
      <div className={classes.root}>
        <NavVertical />
        <Container maxWidth='lg'>
          <div>
            <FFBreadcrumbs
              path={path}
              setPath={setPath}
              labelLession={activeCourse?.label}
              labelTheme={activeLession?.label}
            />
          </div>
          <div>{routeComponent()}</div>
        </Container>
      </div>
    </Context.Provider>
  )
}

export const CoursePage = withCheckAuth(CourseComponent);
