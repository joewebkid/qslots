import React, { useContext, useState } from 'react'
//
import { TextField, Typography, Tooltip } from '@material-ui/core/'
import CheckBox from '@material-ui/core/Checkbox'
import {
  IconButton,
  OutlinedInput,
  InputAdornment,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid
} from '@material-ui/core/'
import {
  Visibility,
  VisibilityOff,
  Info,
  HelpOutline
} from '@material-ui/icons/'
import MaskedInput from 'react-text-mask'
//
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import ru from 'react-phone-input-2/lang/ru.json'
//
import AutoComplete from '../AutoComplete'
//
import Context from '@boot/legacy/context'
import { colorGreyBorder } from '@boot/legacy/CreateTheme'
import QDialogPolice from '../QDialogPolice'
const TextMaskPhone = (props: any) => {
  const { inputRef, ...other } = props

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={[
        /\d/,
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        ' ',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/
      ]}
      placeholderChar={'\u2000'}
      showMask
    />
  )
}

const DialogMainContent = ({
  title,
  subtitle,
  nameAttr,
  typeInput,
  placeholder,
  policy = false,
  multiline = false,
  rowsMax = 5
}: {
  title: string;
  subtitle: string;
  nameAttr: string;
  typeInput: any;
  placeholder: string;
  policy: boolean;
  multiline: boolean;
  rowsMax: number;
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
  const onChangeValue = (e: any) => {
    if (typeof e.target.value === 'string') onChangeError(e.target.value)
    let tempUser = user
    tempUser[nameAttr] = e.target.value
    setUser({ ...tempUser })
  }
  const onChangeError = (value: any) => {
    if (typeof value !== 'string') return
    if (typeInput === 'textBoxPassword') {
      if (nameAttr === 'password')
        !value || !String(value).match(EXP_PASSWORD)
          ? setError(true)
          : setError(false)
      if (nameAttr === 'passwordRetry')
        !value || value !== user['password'] ? setError(true) : setError(false)
    }
  }
  const onChangeValueAuto = (value: any) => {
    let tempUser = user
    tempUser[`${nameAttr}_label`] = value
    setUser({ ...tempUser })
  }

  const onChangeValuePhone = (value: any) => {
    let tempUser = user
    tempUser[nameAttr] = value
    setUser({ ...tempUser })
  }

  const handleMouseDownPassword = (event: any) => {
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
      case 'textPhone':
        return (
          <Grid container>
            <PhoneInput
              containerStyle={{
                margin: 4,
                display: 'flex',
                paddingRight: 7,
                boxSizing: 'border-box'
              }}
              country={'ru'}
              value={user[nameAttr]}
              placeholder={placeholder}
              localization={ru}
              specialLabel=''
              onChange={onChangeValuePhone}
            />
            {policy && (
              <FormControlLabel
                style={{ margin: 0, padding: 0 }}
                control={
                  <CheckBox
                    checked={user['policy']}
                    color='default'
                    onChange={e => {
                      const tempUser = user
                      tempUser['policy'] = !tempUser['policy']
                      setUser({ ...tempUser })
                    }}
                    style={{ color: colorGreyBorder }}
                    size='small'
                  />
                }
                label={
                  <Typography
                    style={{
                      fontSize: 12,
                      color: 'gray'
                    }}
                  >
                    {'Согласен с '}
                    <Typography
                      style={{
                        fontSize: 12,
                        textDecoration: 'underline'
                      }}
                      component='a'
                      onClick={() => setOpen(true)}
                    >
                      {'Правилами Платформы'}
                    </Typography>
                  </Typography>
                }
              />
            )}
          </Grid>
        )
      case 'auto':
        return (
          <Grid container xs={12} alignItems={'center'}>
            <AutoComplete
              value={user[`${nameAttr}_label`]}
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
      case 'textBoxPassword':
        return (
          <Grid container xs={12} alignItems={'center'}>
            <FormControl
              variant='outlined'
              style={{ margin: 4, flexGrow: 1 }}
              error={error}
            >
              <OutlinedInput
                type={isShow ? 'text' : 'password'}
                // variant='outlined'
                id={`input_${nameAttr}`}
                aria-describedby={`input_error_${nameAttr}`}
                value={user[nameAttr]}
                placeholder={placeholder}
                onChange={onChangeValue}
                onBlur={onChangeError}
                onFocus={onChangeError}
                endAdornment={
                  <InputAdornment
                    position='end'
                    style={{ position: 'absolute', right: 16 }}
                  >
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={e => setIsShow(!isShow)}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {isShow ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {error && (
                <FormHelperText
                  id={`input_error_${nameAttr}`}
                  style={{ textAlign: 'center' }}
                >
                  {nameAttr === 'passwordRetry'
                    ? 'Пароли не совпадают'
                    : 'Ваш пароль должен содержать не менее 6 символов: буквы латинского алфавита, цифры'}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
        )
      default:
        return null
    }
  }

  const toGoHref = () => {
    let a = document.createElement('a')
    a.target = '_blank'
    a.href = user?.redirect_url
      ? `https://www.${user?.redirect_url}`
      : 'https://www.qsolts.com/shl/'
    a.click()
  }

  return (
    <React.Fragment>
      <QDialogPolice open={open} setOpen={setOpen} />
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
          {`${subtitle[0]} `}
          <Typography
            variant='body2'
            color='primary'
            component={subtitle[1] !== '<br/>' ? 'a' : 'span'}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => {
              toGoHref()
              setOpenMain(false)
            }}
          >
            {subtitle[1] !== '<br/>' && `${subtitle[1]}`}
          </Typography>
          {` ${subtitle[2]}`}
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
