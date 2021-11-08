import React, { useContext } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {
  VerifiedUser,
} from '@material-ui/icons'
import Context from '@boot/legacy/context'
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    maxWidth: 340,
    borderRadius: '16px 0px 0px 16px',
    minWidth: 340,
    // margin: '64px 0',
    transition: '0.5s',
    height: 'max-content',

    '& div:nth-child(3)': {
      position: 'relative',
      '& div': {
        color: theme.palette.grey[600],
        marginTop: 31,
        '& p:nth-child(1)': {
          display: 'block'
        },
        '& p:nth-child(2)': {
          display: 'none'
        }
      },
      '& button': {
        transition: '0.5s',
        opacity: 0,
        position: 'absolute',
        bottom: 10,
        right: 24,
        backgroundColor: theme.palette.primary.main,
        color: 'white'
      },
      '& #btn-shop': {
        right: 64
      }
    },
    '& p:nth-child(4)': {
      backgroundColor: theme.palette.grey[400],
      color: 'white',
      padding: '2px 16px'
    },
    '& #text-subscribe-shop': {
      backgroundColor: 'red'
    }
  },
  cardIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: 38
  },
  media: {
    height: 0,
    minHeight: 266
  }
}))

export default function RecipeReviewCard ({ index, img, ...props }: {index: any, img: any}) {
  const classes = useStyles()
  const theme = useTheme()

  const { activeCourse } = useContext(Context)
  const {
    label,
    has_guarantee,
    lessons_complete,
    lessons_number,
  } = activeCourse
  let progress = lessons_complete / lessons_number
  progress = progress === Infinity || isNaN(progress) ? 0 : progress
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img} />
      <VerifiedUser
        className={clsx(classes.cardIcon)}
        color='disabled'
        style={{ color: has_guarantee && theme.palette.success.main }}
      />
      <CardContent>
        <Typography component='p' variant='h4'>
          {label}
        </Typography>

        <div>
          <Typography component='p' variant='body1'>
            {`Пройдено ${(progress* 100).toFixed(0)}%`}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
