import React, { useContext, useState } from 'react'
//
import { TextField, Typography, Tooltip } from '@material-ui/core/'
import { IconButton, Grid } from '@material-ui/core/'
import { HelpOutline } from '@material-ui/icons/'
//
import AutoComplete from './AutoComplete'
import Context from '@boot/legacy/context'
//
const DialogMainContent = ({
  title,
  subtitle,
  nameAttr,
  typeInput,
  placeholder,
  policy = false,
  multiline = false,
  rowsMax = 5
}) => {
  const EXP_PASSWORD = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})/

  const { user, setUser, setOpenMain } = useContext(Context)
  const [open, setOpen] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const [error, setError] = useState(false)
  const tooltipInfo = {
    company:
      'Начните вводить название на русском языке. Выберите компанию среди всплывающих подсказок или введите название целиком.',
    textMail:
      'Просто скопируйте полностью содержимое письма с назначением тестов',
    link:
      'Ссылку Вы можете найти в письме с назначением тестов. Ссылка может быть указана в явном виде или может быть спрятана в кнопку «Начать тест» или «Перейти к тестам». В первом случае просто скопируйте ее. Во втором случае необходимо нажать правой кнопкой мыши и выбрать вариант «Скопировать адрес ссылки»'
  }
  const onChangeValue = e => {
    if (typeInput === 'textBoxPassword' && !e.target.value.match(EXP_PASSWORD))
      setError(true)
    else {
      setError(false)
    }
    let tempUser = user
    tempUser[nameAttr] = e.target.value
    setUser({ ...tempUser })
  }
  const onChangeError = () => {
    typeInput === 'textBoxPassword' && !user[nameAttr].match(EXP_PASSWORD)
      ? setError(true)
      : setError(false)
  }
  const onChangeValueAuto = value => {
    let tempUser = user
    tempUser[`${nameAttr}_label`] = value
    setUser({ ...tempUser })
  }

  const onChangeValuePhone = value => {
    let tempUser = user
    tempUser[nameAttr] = value
    setUser({ ...tempUser })
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }
  const routeContent = () => {
    switch (typeInput) {
      case 'textBox':
        return (
          <Grid container xs={12} alignItems={'center'}>
            <TextField
              multiline={false}
              rowsMax={rowsMax}
              value={user[nameAttr]}
              placeholder={placeholder}
              style={{ margin: 4, flexGrow: 1 }}
              variant='outlined'
              onChange={onChangeValue}
            />
            {(nameAttr === 'link' || nameAttr === 'textMail') && (
              <Tooltip title={tooltipInfo[nameAttr]}>
                <IconButton edge='end' style={{ height: 48 }} color={'default'}>
                  <HelpOutline />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
        )
      case 'auto':
        return (
          <Grid container xs={12} alignItems={'center'}>
            <AutoComplete
              value={user[`${nameAttr}_label`]}
              placeholder={placeholder}
              style={{ margin: 4, flexGrow: 1 }}
              variant='outlined'
              setValue={onChangeValueAuto}
            />
            {nameAttr === 'company' && (
              <Tooltip title={tooltipInfo[nameAttr]}>
                <IconButton edge='end' style={{ height: 48 }} color={'default'}>
                  <HelpOutline />
                </IconButton>
              </Tooltip>
            )}
          </Grid>
        )
      default:
        return null
    }
  }

  return (
    <React.Fragment>
      {title && (
        <Typography
          variant='h3'
          style={{ textAlign: 'center', marginBottom: subtitle ? 35 : 35 }}
        >
          {title}
        </Typography>
      )}
      {subtitle && Array.isArray(subtitle) ? (
        <Typography
          variant='body2'
          style={{
            textAlign: 'center',
            marginBottom: !routeContent() ? 88 : 50
          }}
        >
          {subtitle[0]}
          <Typography
            variant='body2'
            color='primary'
            component={subtitle[1] !== '<br/>' && 'a'}
            style={{ cursor: 'pointer' }}
            onClick={() => setOpenMain(false)}
          >
            {subtitle[1] !== '<br/>' && ` ${subtitle[1]} `}
          </Typography>
          {subtitle[2]}
        </Typography>
      ) : subtitle ? (
        <Typography
          variant='body2'
          style={{
            textAlign: 'center',
            marginBottom: !routeContent() ? 88 : 50
          }}
        >
          {subtitle}
        </Typography>
      ) : null}
      {routeContent() && (
        <div style={{ marginBottom: nameAttr === 'password' ? 10 : 35 }}>
          {routeContent()}
        </div>
      )}
    </React.Fragment>
  )
}

export default DialogMainContent
