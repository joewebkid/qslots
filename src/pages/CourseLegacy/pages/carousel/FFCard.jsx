import React, { useContext } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import { Paper, SvgIcon, Tooltip } from '@material-ui/core'
import {
  VerifiedUser,
  ChevronRight,
  ChevronRightRounded,
  ShoppingBasket,
  FontDownloadOutlined,
  FourKOutlined,
  FilterBAndWOutlined,
  ExposureOutlined,
  ExplicitOutlined,
  ShoppingCartOutlined,
  ShoppingBasketOutlined
} from '@material-ui/icons'
import { ReactComponent as Plus } from '../../style/Plus.svg'
import Context from '@boot/legacy/context'
import moment from 'moment'
import { GetPayload } from '../dialogAdd/utils'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    maxWidth: 360,
    borderRadius: 16,
    minWidth: 360,
    minHeight: 400,
    margin: '64px 0',
    transition: '0.5s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: theme.shadows[12],
      '& #cardMedia': {
        backgroundColor: 'rgba(255,102,82,0.5)',
        backgroundBlendMode: 'multiply',
        filter: 'none'
      },
      '& #text-subscribe-shop': {
        opacity: 1,
        transition: '0.5s'
      },
      '& #text-subscribe-hint': {
        opacity: 1,
        transition: '0.5s'
      },
      '& div:nth-child(3)': {
        '& div': {
          marginTop: 31,
          '& p:nth-child(1)': {
            display: 'none'
          },
          '& p:nth-child(2)': {
            display: 'block',
            color: theme.palette.primary.main
          }
        },
        '& button': {
          opacity: 1
        }
      }
    },
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
      backgroundColor: '#b6b6b6',
      color: 'white',
      padding: '2px 16px'
    },
    '& #text-subscribe-shop': {
      opacity: 0,
      backgroundColor: 'red',
      transition: '0.5s'
    },
    '& #text-subscribe-hint': {
      opacity: 0,
      transition: '0.5s'
    }
  },
  cardIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    fontSize: 38
  },
  cardTitle: {
    color: theme.palette.grey[600]
  },
  media: {
    height: 0,
    minHeight: 266,
    filter: 'brightness(0.7)',
    transition: '0.5s'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  addCardTitle: {
    marginTop: 39
  },
  addCardIcon: {
    fontSize: 88
  },
  addCard: {
    color: theme.palette.grey[300],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main
    },
    '&:active': {}
  }
}))

export default function RecipeReviewCard ({ course, index, ...props }) {
  const { toGoActiveCourse } = useContext(Context)
  const classes = useStyles()
  const theme = useTheme()
  const {
    label,
    has_guarantee,
    is_active,
    lessons_complete,
    payed_for_dt,
    lessons_number,
    create_dt,
    tests
  } = course
  let progress = lessons_complete / lessons_number
  progress = progress === Infinity || isNaN(progress) ? 0 : progress
  const date_str = new Date(payed_for_dt).toLocaleDateString()
  const create_dt_30 = moment(create_dt).add(30, 'day')
  const create_dt_str = new Date(
    create_dt_30._d.toDateString()
  ).toLocaleDateString()
  const payed_for_dt_7 = moment(payed_for_dt).subtract(7, 'day')

  const date_to_buy = moment(payed_for_dt).subtract(7, 'day') > moment()
  const date_to_old = moment(payed_for_dt).add(3, 'month')
  const date_to_old_str = new Date(
    date_to_old._d.toDateString()
  ).toLocaleDateString()

  const is_buy = !(date_to_buy && is_active)
  const is_tests = [0, 0, 0]
  const icons_tests = [
    <ExplicitOutlined />,
    <ExposureOutlined />,
    <FilterBAndWOutlined />
  ]
  const label_tests = ['Вербальный', 'Числовой', 'Логический']
  tests.forEach(
    (test, index) =>
      label_tests.indexOf(test.label) > -1 &&
      (is_tests[label_tests.indexOf(test.label)] = 1)
  )

  const controlHint = () => {
    if (is_active && payed_for_dt_7 > moment()) {
      return (
        <Typography component='p' variant='body1' id='text-subscribe-hint'>
          {`Подписка действует до ${date_str}`}
        </Typography>
      )
    }
    if (is_active && payed_for_dt_7 < moment()) {
      return (
        <Typography component='p' variant='body1' id='text-subscribe-hint'>
          {`Продлите подписку до ${date_str}`}
        </Typography>
      )
    }

    if (date_to_old > moment()) {
      return (
        <Typography component='p' variant='body1' id='text-subscribe-shop'>
          {`Продлите подписку до ${date_to_old_str}`}
        </Typography>
      )
    }

    if (!is_active && create_dt_30 > moment()) {
      return (
        <Typography component='p' variant='body1' id='text-subscribe-shop'>
          {`Оплатите до ${create_dt_str}`}
        </Typography>
      )
    }
  }
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.img}
        id={'cardMedia'}
        // style={{background: `rgba(0, 0, 0, 0.37), url(${props.img})`}}
      />
      <VerifiedUser
        className={clsx(classes.cardIcon)}
        color='disabled'
        style={{ color: has_guarantee && theme.palette.success.main }}
      />
      <CardContent>
        <Typography component='p' variant='h4'>
          {label}
        </Typography>
        <Typography component='p' variant='h4' className={classes.cardTitle}>
          {is_tests.map((is, index) => {
            return (
              <Tooltip title={label_tests[index]}>
                <Typography
                  component='span'
                  variant='h4'
                  style={{ color: is ? '#fc6652' : '#b6b6b6' }}
                >
                  {icons_tests[index]}
                </Typography>
              </Tooltip>
            )
          })}
        </Typography>
        {(is_active || date_to_old > moment() )? (
          <div>
            <Typography component='p' variant='body1'>
              {`Пройдено ${(progress* 100).toFixed(0)}%`}
            </Typography>
            {is_buy ? (
              <Typography component='p' variant='body1'>
                {`Пройдено ${(progress* 100).toFixed(0)}%`}
              </Typography>
            ) : (
              <Typography component='p' variant='body1'>
                {`Пройдено ${(progress* 100).toFixed(0)}%`}
              </Typography>
            )}
          </div>
        ) : (
          <Typography
            component='p'
            variant='body1'
            style={{ marginTop: 31, color: theme.palette.primary.main }}
          >
            {`Оплатить курс`}
          </Typography>
        )}
        {is_active && (
          <IconButton
            size='small'
            id='btn-start'
            onClick={() => toGoActiveCourse(course)}
          >
            <ChevronRight />
          </IconButton>
        )}
        {is_buy && (
          <IconButton
            size='small'
            id='btn-shop'
            style={{
              right: !is_active ? 32 : 64,
              bottom: !is_active ? 20 : 10
            }}
            onClick={() => GetPayload(course.id)}
          >
            <ShoppingBasketOutlined
              style={{ transform: 'translate(-0.7%, 0px)' }}
            />
          </IconButton>
        )}
      </CardContent>
      {controlHint()}
    </Card>
  )
}

const FFCardAdd = props => {
  const { toGoActiveCourse } = useContext(Context)

  const classes = useStyles()
  return (
    <Paper
      className={clsx(classes.root, classes.addCard)}
      onClick={() => toGoActiveCourse({ id: 'new' })}
    >
      <SvgIcon
        component={Plus}
        viewBox='0 0 64 64'
        className={classes.addCardIcon}
      />
      <Typography variant='body1' className={classes.addCardTitle}>
        {'Добавить курс'}
      </Typography>
    </Paper>
  )
}

export { FFCardAdd }
