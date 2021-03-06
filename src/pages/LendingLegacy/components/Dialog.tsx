import React, { useEffect, useContext, useState } from 'react'
//
import {
  Grid,
  Divider,
  CardContent,
  CardActions,
  Card,
  MobileStepper,
  Dialog,
  Typography,
  IconButton,
  Button,
  Drawer,
  Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { v4 as uuidv4 } from 'uuid';

//
import SimpleBackdrop from './BackDrop'
import DialogActionContent from './dialogComponents/DialogActionContent'
import StepperPoints from './StepperPoints'
import DialogMainContent from './dialogComponents/DialogMainContent'
import { DialogContent, DialogTitle } from './dialogComponents/DialogStyle'

import QDrawer from './QDrawer'
import QDrawerBotCourse from './QDrawerNotCourse'
//
// import theme from '../../../boot/CreateTheme'
import {
  IntroLogo,
  Step1RightRect,
  Step1Text01,
  Step2Text02
} from '@boot/static/svg/js/index'
import Context from '@boot/legacy/context'
import { HelpOutline } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  drawer: {
    overflow: 'initial'
  },
  root: {
    width: 600,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    flexGrow: 1,
    display: 'flex'
  },
  content: {
    width: 408,
    margin: 'auto'
  },
  btnSubscribe: {
    padding: '25px 24px',
    backgroundColor: theme.palette.primary.contrastText,
    margin: '73px auto 0px',
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText
    }
  },
  btnClose: {
    width: 36,
    height: 36,
    top: '50%',
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
    border: '1px solid white',
    color: 'white',
    left: -18,
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  }
}))

export default function CustomizedDialogs ({
  open,
  setOpen,
  step,
  setStep,
  nextStep,
  openBackDrop,
  magicNotCourse,
  isDrawer,
  setIsDrawer,
  magicGoodCourse,
  ...props
}: {
  open: boolean;
  setOpen: any;
  step: any;
  setStep: any;
  nextStep: any;
  openBackDrop: any;
  magicNotCourse: any;
  isDrawer: any;
  setIsDrawer: any;
  magicGoodCourse: any;
}) {
  const classes = useStyles()
  const handleClose = () => {
    setOpen(false)
  }
  const { user } = useContext(Context)

  const startStep = openBackDrop !== magicGoodCourse && step >= 4 ? 4 : 0
  const onBack = () => {
    setStep(step > startStep ? step - 1 : startStep)
  }

  const templateMainContent = (props: any) => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: 'auto',
          width: 427
        }}
      >
        {props}
      </div>
    )
  }

  /**
   * ?????????????? ?????? ?????????????????????? ???????????????? ?????? ??????????????
   * @param {object} props
   */
  const templateMainContentLabelText = (props: any) => {
    return <DialogMainContent key={props.key} {...props} />
  }

  const templateTitleContent = ({ activeStep, steps, ...props }: {activeStep: number, steps: number}) => {
    return (
      <MobileStepper
        style={{
          flexGrow: 1,
          background: 'white',
          maxWidth: '3',
          justifyContent: 'center'
        }}
        variant='dots'
        steps={steps}
        position='static'
        activeStep={activeStep} 
        backButton={undefined} 
        nextButton={undefined}
      />
    )
  }

  const toGoHref = () => {
    let a = document.createElement('a')
    a.target = '_blank'
    a.href = user?.redirect_url
      ? `https://www.${user?.redirect_url}`
      : 'https://www.qsolts.com/shl/'
    a.click()
  }

  const [mainSteps, setMainSteps] = useState(['???????????? ??????????', '??????????????????????'])
  useEffect(() => {
    if (openBackDrop === magicGoodCourse) {
      setMainSteps(['???????????? ??????????', '??????????????????????', '????????????????'])
    }
  }, [user])

  const getContentByBackDrop = () => {
    if (!user) return { title: '', subtitle: '', actionContent: {} }
    const { tests, test_system, test_subsystem } = user
    const testTitle = tests?.length
      ? tests.map((obj: any) => obj.label).join(', ')
      : '???? ????????????????????'
    const testSystemTitle = test_system?.label
      ? test_system.label
      : '???? ????????????????????'
    const testSubsystemTitle = test_subsystem?.label
      ? test_subsystem.label
      : '???? ????????????????????'
    let title = '??????????????????????'
    let subtitle = ['?????? ?????? ??????????????????????', '<br/>', '???????????????????????????? ??????c!']
    // let subtitle = `???????? ?????????? ${testTitle} ?????????????????? ?? ?????????????? ???????????????????????? ${testSystemTitle} ?? ???????????????????? ${testSubsystemTitle}.`
    let actionContent: {isDisBtn: boolean, cntBtn: string, actionBtn?: () => void, actionTime?: any} = { isDisBtn: false, cntBtn: '????????!'}
    if (openBackDrop === magicNotCourse) {
      title = '???????????????? ??????????????????????'
      subtitle = [`?? `, '?????? ??????????????', ` ???????????????? ?? ???????? ?????? ?????????????? ??????????`]
      actionContent = { isDisBtn: false, cntBtn: '??????????????!' }
      // setIsDrawer(false)
    } else if (openBackDrop !== magicGoodCourse) {
      title = '??????...:('
      subtitle = ['???????????? ?????????? ?????????????????? ?? ????????????????????.']
      actionContent = {
        isDisBtn: false,
        actionBtn: () => {
          toGoHref()
          setOpen(false)
        },
        // setOpen(false),
        cntBtn: '?????????????????? ?? ??????????????????'
      }
      // setIsDrawer(false)
    }
    return { title, subtitle, actionContent }
  }
  /**
   * ?????????????? ?????? ?????????????????????? ???????????? ?????? ??????????????
   * @param {string} nameAttr
   * @param {boolean} isDisBtn
   * @param {string} cntBtn
   * @param {function} actionBtn
   */
  const templateActionContent = ({
    nameAttr = '',
    isDisBtn = true,
    cntBtn = '????????????????????',
    actionBtn = () => nextStep(step + 1),
    actionTime = null
  }) => {
    return (
      <DialogActionContent
        nameAttr={nameAttr}
        actionBtn={actionBtn}
        isDisBtn={isDisBtn}
        cntBtn={cntBtn}
        actionTime={actionTime}
      />
    )
  }
  let metaDialog = [
    {
      stepMain: 0,
      step1Level: -1,
      titleContent: null,
      mainContent: templateMainContent(
        templateMainContentLabelText({
          title: '?????? ??????????????',
          subtitle:
            '?????????????? ???????????????????? ?????? ?????????????????????? ???????????? ?? ???????????????????????? ????????',
          typeInput: null,
          key: 'dialog-1'
        })
      ),
      actionContent: templateActionContent({
        cntBtn: '??????????????!',
        isDisBtn: false
      })
    },
    {
      stepMain: 0,
      step1Level: 0,
      titleContent: templateTitleContent,
      mainContent: templateMainContent(
        templateMainContentLabelText({
          title: null,
          subtitle: '?????????????? ???????????????? ?????? ?????????????? ?????????????????? ????????????????????????',
          nameAttr: 'company',
          typeInput: 'auto',
          placeholder: '???????? ????????????????',
          key: 'dialog-2'
        })
      ),
      actionContent: templateActionContent({
        isDisBtn: !user?.company_label?.length
      })
    },
    {
      stepMain: 0,
      step1Level: 1,
      titleContent: templateTitleContent,
      mainContent: templateMainContent(
        templateMainContentLabelText({
          title: null,
          subtitle: '?????????????? ???????????? ???? ???????? ???????????????????? ???? ????????????????????????',
          nameAttr: 'link',
          typeInput: 'textBox',
          placeholder: '????????????',
          key: 'dialog-3'
        })
      ),
      actionContent: templateActionContent({ isDisBtn: !user?.link?.length })
    },
    {
      stepMain: 0,
      step1Level: 2,
      titleContent: templateTitleContent,
      mainContent: templateMainContent(
        templateMainContentLabelText({
          title: null,
          subtitle:
            '???????????????????? ???????????? ?????????? ???????????? ???? ???????????????? ???? ???????????????????? ????????????',
          nameAttr: 'textMail',
          typeInput: 'textBox',
          placeholder: '?????????? ????????????',
          multiline: true,
          key: 'dialog-4'
        })
      ),
      actionContent: templateActionContent({
        isDisBtn: !user?.textMail?.length
      })
    },
    {
      stepMain: 0,
      step1Level: -3,
      titleContent: null,
      mainContent: templateMainContent(
        templateMainContentLabelText({
          title: getContentByBackDrop().title,
          subtitle: getContentByBackDrop().subtitle,
          typeInput: null,
          key: 'dialog-5'
        })
      ),
      actionContent: templateActionContent(getContentByBackDrop().actionContent)
    },
    {
      stepMain: 1,
      step1Level: 0,
      titleContent: templateTitleContent,
      mainContent: templateMainContent(
        templateMainContentLabelText({
          subtitle: '?????????????? ???????? ?????????? ????????????????',
          nameAttr: 'phone',
          typeInput: 'textPhone',
          placeholder: '?????????????? ???????? ??????????????',
          policy: true,
          multiline: true,
          key: 'dialog-6'
        })
      ),
      actionContent: templateActionContent({
        cntBtn: '?????????????????? ??????',
        isDisBtn: !(user?.phone?.length && user?.policy)
      })
    },
    {
      stepMain: 1,
      step1Level: 1,
      titleContent: templateTitleContent,
      mainContent: templateMainContent(
        templateMainContentLabelText({
          subtitle: '?????????????? ?????? ???? SMS',
          nameAttr: 'code',
          typeInput: 'textBox',
          placeholder: '2517',
          multiline: true,
          key: 'dialog-7'
        })
      ),
      actionContent: templateActionContent({ isDisBtn: !user?.code.length })
    },
    {
      stepMain: 1,
      step1Level: 2,
      titleContent: templateTitleContent,
      mainContent: templateMainContent([
        templateMainContentLabelText({
          title: '???????????????????? ????????????',
          nameAttr: 'password',
          typeInput: 'textBoxPassword',
          placeholder: '????????????',
          multiline: true,
          key: 'dialog-8'
        }),
        templateMainContentLabelText({
          nameAttr: 'passwordRetry',
          typeInput: 'textBoxPassword',
          placeholder: '?????????????????? ????????????',
          multiline: true,
          key: 'dialog-9'
        })
      ]),
      actionContent: templateActionContent({
        nameAttr: 'passwordRetry',
        cntBtn: '????????????????????????????????????',
        isDisBtn: !(
          user?.passwordRetry?.length &&
          user?.password?.length &&
          user.password === user.passwordRetry
        )
      })
    },
    // {
    //   stepMain: 1,
    //   step1Level: 3,
    //   titleContent: templateTitleContent,
    //   mainContent: templateMainContent(
    //     templateMainContentLabelText({
    //       title: '?????????????? ??????',
    //       subtitle: '?? ???? ???????????????????? ?????? ?????? ????????',
    //       nameAttr: 'name',
    //       typeInput: 'textBox',
    //       placeholder: '???????? ???????? ????????????????'
    //     })
    //   ),
    //   actionContent: templateActionContent({
    //     nameAttr: 'name',
    //     cntBtn:
    //       user?.course_id.length && openBackDrop !== magicNotCourse
    //         ? '???????????????????????????????????? ?? ????????????????!'
    //         : '????????????????????????????????????'
    //   })
    // },
    {
      stepMain: 2,
      step1Level: 0,
      titleContent: null,
      mainContent: templateMainContent(
        templateMainContentLabelText({
          title: '?????????????? ??????',
          subtitle: '?? ???? ???????????????????? ?????? ?????? ????????',
          nameAttr: 'name',
          typeInput: 'textBox',
          placeholder: '???????? ???????? ????????????????',
          key: 'dialog-10'
        })
      ),
      actionContent: templateActionContent({
        isDisBtn: !user?.name?.length,
        cntBtn: '????????????????!'
      })
    }
    // {
    //   stepMain: 2,
    //   step1Level: 0,
    //   titleContent: templateTitleContent,
    //   mainContent: templateMainContent(
    //     templateMainContentLabelText({
    //       title:
    //         '??????????????????????! ???? ???????????????????????????????????? ?? ?????????? ???????????? ??????????????. ?????? ?????????? ???????????????? ???????? ?? ???????????? ??????????, ???? ???????????? ???????????? LEMIN!'
    //     })
    //   ),
    //   actionContent: templateActionContent({
    //     cntBtn: '????????????????!',
    //     isDisBtn: false
    //   })
    // }
  ]

  /**
   * @argument isGood
   * 0 - ?? ?????????? ?????? ???????????? ?? ?????????????? ???????????? ???? ?????????????????????? ?????? ????????????
   * 1 -
   */
  // if ()

  const routerContent = () => {
    const stepCount = metaDialog.filter(
      obj => obj.stepMain === metaDialog[step].stepMain && obj.step1Level > -1
    ).length
    const titleContent =
      metaDialog[step].titleContent === templateTitleContent
        ? metaDialog[step].titleContent!({
          activeStep: metaDialog[step].step1Level,
          steps: stepCount
        })
        : metaDialog[step].titleContent
    const mainContent = metaDialog[step].mainContent
    const actionContent = metaDialog[step].actionContent

    return (
      <React.Fragment>
        <Container maxWidth='lg' style={{ display: 'flex' }}>
          <IntroLogo
            style={{
              position: 'absolute',
              padding: '50px 0 0 60px',
              transform: 'scale(0.8)'
            }}
          />
          <DialogContent
            style={{
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'column',
              zIndex: 1000,
              position: 'relative'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Grid item xs={3}></Grid>
              <Grid container item xs={6}>
                <StepperPoints
                  steps={mainSteps}
                  activeStep={metaDialog[step].stepMain}
                />
              </Grid>
              <Grid item xs={3}></Grid>
            </div>
            <Grid
              item
              xs={12}
              style={{
                display: 'flex',
                flexDirection: 'row',
                // alignItems: 'center',
                marginTop: 100,
                justifyContent: 'center'
              }}
            >
              <Grid item xs={6}>
                <Card
                  elevation={20}
                  style={{
                    borderRadius: 16,
                    padding: 0,
                    width: 570,
                    margin: 'auto'
                  }}
                >
                  <DialogTitle
                    onClose={handleClose}
                    onBack={onBack}
                    isBtn={step > startStep}
                    step={step}
                    style={{ height: 90, boxSizing: 'border-box' }}
                  >
                    {titleContent}
                  </DialogTitle>
                  <CardContent style={{ padding: 0 }}>
                    {mainContent}
                  </CardContent>
                  <CardActions style={{ padding: 0 }}>
                    {actionContent}
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
            {metaDialog[step].stepMain === 0 ? (
              <Step1Text01
                style={{
                  position: 'absolute',
                  bottom: '0%',
                  right: '7%',
                  transform: 'scale(0.6) translate(0%, 33%)',
                  zIndex: 0
                }}
              />
            ) : (
              <Step2Text02
                style={{
                  position: 'absolute',
                  bottom: '0%',
                  right: '7%',
                  transform: 'scale(0.6) translate(0%, 33%)',
                  zIndex: 0
                }}
              />
            )}
          </DialogContent>
        </Container>
        <Step1RightRect
          style={{
            opacity: 0.2,
            position: 'absolute',
            top: '42%',
            left: -211,
            zIndex: 0
          }} 
          fill={undefined} 
        />
        <Step1RightRect
          style={{
            opacity: 0.2,
            position: 'absolute',
            top: '8%',
            right: -225,
            zIndex: 0
          }}
          fill={undefined}
        />
      </React.Fragment>
    )
  }

  const getDrawer = () => {
    if (!user) return null
    const { tests, test_system, test_subsystem, redirect_url } = user
    const testTitle = tests?.length
      ? tests.map((obj: any) => obj.label).join(', ')
      : '???? ????????????????????'
    const testSystemTitle = test_system?.label
      ? test_system.label
      : '???? ????????????????????'
    const testSubsystemTitle = test_subsystem?.label
      ? test_subsystem.label
      : '???? ????????????????????'
    if (step !== 4 && step !== 8) {
      if (step > 4) setIsDrawer(false)
      return null
    } else if (openBackDrop === magicGoodCourse)
      return (
        <>
          <QDrawer
            state={isDrawer}
            setState={setIsDrawer}
            meta={user.text_data || []}
            nextStep={nextStep}
            step={step}
          />
          <Grid
            item
            xs={5}
            alignItems='center'
            style={{
              position: 'absolute',
              top: '50%',
              paddingRight: 108,
              right: 0,
              justifyContent: 'flex-end',
              zIndex: 1001
            }}
          >
            <Button onClick={() => setIsDrawer(true)}>
              <Typography variant='body1' color='primary'>
                {'?????????????????? ?? ??????????'}
              </Typography>
              <IconButton edge='end' style={{ height: 48 }} color={'primary'}>
                <HelpOutline />
              </IconButton>
            </Button>
          </Grid>
        </>
      )
    else if (openBackDrop !== magicNotCourse) {
      return (
        <QDrawerBotCourse
          state={isDrawer}
          setState={setIsDrawer}
          setOpen={setOpen}
          {...{ testTitle, testSystemTitle, testSubsystemTitle, redirect_url }}
        />
      )
    }
    return null
  }

  return (
    <>
      {/* {getDrawer()} */}

      <Dialog
        onClose={handleClose}
        open={open}
        fullWidth={true}
        fullScreen
        id={'dialogId'}
        style={{ overflow: 'hidden' }}
      >
        {openBackDrop?.length === 0 && (
          <SimpleBackdrop open={openBackDrop?.length === 0} />
        )}
        <div
          style={{
            overflow: 'hidden',
            display: 'flex',
            height: '100vh',
            position: 'relative'
          }}
        >
          {routerContent()}
        </div>
        {getDrawer()}
      </Dialog>
    </>
  )
}
