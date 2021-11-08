import React, { useState, useContext } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import FFCard, { FFCardAdd } from './carousel/FFCard'
import { IconButton } from '@material-ui/core'
import { ChevronLeft, ChevronRight } from '@material-ui/icons'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Context from '@boot/legacy/context'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexGrow: 1
  },
  btnNav: {
    zIndex: 1,
    width: 36,
    height: 36,
    top: 'calc(50% - 18px)',
    position: 'absolute',
    backgroundColor: theme.palette.grey[500],
    border: '1px solid white',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.grey[500]
    }
  }
}))

export default function FFCarousel () {
  const classes = useStyles()

  const { courses } = useContext(Context)

  const [index, setIndex] = useState(0)
  return (
    <div style={{ position: 'relative' }}>
      {index > 0 && (
        <IconButton
          size='small'
          onClick={() => setIndex(index === 0 ? 0 : index - 1)}
          className={classes.btnNav}
          style={{ left: -18 }}
        >
          <ChevronLeft />
        </IconButton>
      )}

      <div style={{ marginLeft: -32 }}>
        <Carousel value={index} offset={64} itemWidth={365} draggable={false}>
          {[
            <FFCardAdd />,
            ...courses.map((course: any, index: any) => (
              <FFCard
                key={`FFCardCourse_${course?.id}`}
                {...{ course, index }}
                img={course.url_pic}
              />
            ))
          ]}
        </Carousel>
      </div>
      {index < courses?.length - 2 && (
        <IconButton
          size='small'
          onClick={() =>
            setIndex(index === courses?.length ? courses?.length : index + 1)
          }
          className={classes.btnNav}
          style={{ right: 0 }}
        >
          <ChevronRight />
        </IconButton>
      )}
    </div>
  )
}
