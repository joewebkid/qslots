import React, { useState, useEffect } from 'react'
import { QPlayer } from './lession/QPlayer'
import imageTwo from '@boot/static/img/user.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import { Typography, Link } from '@material-ui/core'
import { useContext } from 'react'
import Context from '@boot/legacy/context'
import QDrawer from './lession/QDrawer'
import VerticalLinearStepper from '../components/Steppers'
import { ApiConnect, urlAuth } from '@boot/legacy/apiConnect'

const useStyles = makeStyles(theme => ({
  is_active: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    width: 288
  },
  root: {
    marginTop: 64,
    position: 'relative',
    // flexGrow: 1,
    display: 'flex',
    '& #temp': {
      // maxHeight: 388,
      transition: '0.1s',
      '& div': {
        backgroundColor: '#D9D9D9',
        transition: '0.2s',
        color: '#525151',
        // height: 97,
        borderRadius: '0 8px 8px 0',
        width: 266,
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:hover ': {
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          width: 288,
          opacity: 0.7
        }
      }
    }
  }
}))

export default function FFStructCourse ({ ...props }) {
  const classes = useStyles()
  const { activeLession, toGoActiveLession } = useContext(Context)
  const { lessons, video_ok, video_all } = activeLession

  const [video, setVideo] = useState(video_ok)
  const [indexComplite, setIndexComplite] = useState(
    video_ok === video_all ? video_ok -1 : video_ok
  )
  const [activeTheme, setActiveTheme] = useState(lessons[indexComplite])

  useEffect(() => {
    if (lessons[indexComplite - 1] && !lessons[indexComplite - 1].is_completed) {
      lessons[indexComplite - 1].is_completed = true
      setVideo(video + 1)
      ApiConnect({
        name: 'getData',
        url: `${urlAuth}/lesson/complete/?lesson_id=${lessons[indexComplite - 1].id}`,
        setterEssence: () => {
          props.update()
        },
        clickHandle: null,
        setterLoading: null
      })

    }
    if (lessons[indexComplite]) setActiveTheme(lessons[indexComplite])
  }, [indexComplite])

  const finishBlock = (index: any) => {
    setVideo(video + 1)

    if(lessons[index]){
      lessons[index].is_completed = true
      ApiConnect({
        name: 'getData',
        url: `${urlAuth}/lesson/complete/?lesson_id=${lessons[index].id}`,
        clickHandle: null,
        setterLoading: null
      })
      props.update()
      toGoActiveLession(null)
    }
  }
  return (
    <div className={classes.root}>
      <div style={{ display: 'flex', flexDirection: 'column', width: 620 }}>
        <QPlayer {...{ activeTheme }} />
        <VerticalLinearStepper
          activeStep={indexComplite}
          setIndexComplite={setIndexComplite}
          steps={lessons}
          video_ok={video - 1}
        />
        <Typography
          variant='subtitle1'
          style={{
            color: '#b6b6b6',
            cursor: 'pointer',
            marginTop: 10,
            textAlign: 'end'
          }}
          onClick={e => toGoActiveLession(null)}
        >
          {'< Назад к структуре'}
        </Typography>
      </div>
      <QDrawer
        finishBlock={finishBlock}
        {...{ activeTheme, indexComplite }}
        setIndexComplite={setIndexComplite}
        lessonsCount={lessons.length}
        lessons={lessons}
      />
    </div>
  )
}
