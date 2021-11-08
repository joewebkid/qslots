import React from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  DialogContent,
  Grid,
  CardMedia,
  Paper,
  Typography,
  Container
} from '@material-ui/core'
import { IntroLogo } from '@boot/static/svg/js'
const adminImage = require('@boot/static/img/hello.jpg')

/**
 * Компонент который возвращает приветсвтвенный диалог
 */
const DialogHello = ({
  open,
  setOpen,
  openMain,
  setOpenMain,
  setStep,
  setOpenBackDrop,
  magicNotCourse
}: {
  open: any,
  setOpen: any,
  openMain: any,
  setOpenMain: any,
  setStep: any,
  setOpenBackDrop: any,
  magicNotCourse: any
}) => {
  return (
    <Dialog
      onClose={() => {
        setOpen(false)
        setOpenMain(false)
      }}
      fullWidth={true}
      fullScreen
      aria-labelledby='customized-dialog-title'
      open={open}
      maxWidth={'sm'}
    >
      <Container maxWidth='lg' style={{ display: 'flex', flexGrow: 1 }} >
        <Grid container xs={12} item>
          <IntroLogo
            style={{
              position: 'absolute',
              padding: '50px 0 0 60px',
              transform: 'scale(0.8)'
            }}
          />
          <div style={{ display: 'flex', flexGrow: 1 }}>
            <Grid
              item
              xs={6}
              style={{
                display: 'flex',
                flexGrow: 1,
                alignItems: 'center'
              }}
            >
              <div style={{width: 474, margin: 'auto'}}>
                <Typography variant='h5' color='primary'>
                  {'Добро пожаловать!'}
                </Typography>
                <Typography variant='h2' style={{ marginTop: 22 }}>
                  {'Получили ли Вы письмо счастья от работодателя со ссылкой'}
                  <Typography variant='h2' color='primary' component='span'>
                    {' на тест?'}
                  </Typography>
                </Typography>
                <Grid
                  item
                  xs={12}
                  container
                  style={{ justifyContent: 'space-between', marginTop: 36 }}
                >
                  <Button
                    autoFocus
                    variant='contained'
                    color='primary'
                    style={{ padding: '25px 60px' }}
                    size='large'
                    onClick={e => {
                      setStep(0)
                      setOpenBackDrop('init')
                      setOpenMain(!openMain)
                      // setOpen(!open)
                    }}
                  >
                    <Typography variant='body1'>{'Получил'}</Typography>
                  </Button>
                  <Button
                    autoFocus
                    variant='text'
                    color='primary'
                    style={{ padding: '25px 24px' }}
                    size='large'
                    onClick={e => {
                      setStep(4)
                      setOpenBackDrop(magicNotCourse)
                      setOpenMain(!openMain)
                      // setOpen(!open)
                    }}
                  >
                    <Typography variant='body2'>{'Нет, не получил'}</Typography>
                  </Button>
                </Grid>
              </div>
            </Grid>
            <Grid item xs={6}>
              <CardMedia
                image={adminImage.default}
                style={{ height: '100%', width: '50%', position: 'absolute' }}
                title='Contemplative Reptile'
              />
            </Grid>
            </div>
        </Grid>
      </Container>
    </Dialog>
  )
}

export default DialogHello



// import React from 'react'

// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogTitle,
//   Divider,
//   DialogContent,
//   Grid,
//   CardMedia,
//   Paper,
//   Typography,
//   Container
// } from '@material-ui/core'
// import { IntroLogo } from '../../static/svg/js'
// const adminImage = require('../../static/img/hello.jpg')

// /**
//  * Компонент который возвращает приветсвтвенный диалог
//  */
// const DialogHello = ({
//   open,
//   setOpen,
//   openMain,
//   setOpenMain,
//   setStep,
//   setOpenBackDrop,
//   magicNotCourse
// }) => {
//   return (
//     <Dialog
//       onClose={() => {
//         setOpen(false)
//         setOpenMain(false)
//       }}
//       fullWidth={true}
//       fullScreen
//       aria-labelledby='customized-dialog-title'
//       open={open}
//       fullWidth={true}
//       maxWidth={'sm'}
//     >
//       <Container maxWidth='lg' style={{ display: 'flex', flexGrow: 1 }} >
//         <Grid container xs={12}>
//           <IntroLogo
//             style={{
//               position: 'absolute',
//               padding: '50px 0 0 150px',
//               transform: 'scale(0.8)'
//             }}
//           />
//           <Paper style={{ display: 'flex', flexGrow: 1 }} elevation={3}>
//             <Grid
//               item
//               xs={6}
//               style={{
//                 display: 'flex',
//                 flexGrow: 1,
//                 alignItems: 'center'
//               }}
//             >
//               <Grid item xs={12} style={{ padding: '0 95px 0 150px' }}>
//                 <Typography variant='h5' color='primary'>
//                   {'Добро пожаловать!'}
//                 </Typography>
//                 <Typography variant='h2' style={{ marginTop: 22 }}>
//                   {'Получили ли Вы письмо счастья от работодателя со ссылкой'}
//                   <Typography variant='h2' color='primary' component='span'>
//                     {' на тест?'}
//                   </Typography>
//                 </Typography>
//                 <Grid
//                   xs={12}
//                   container
//                   style={{ justifyContent: 'space-between', marginTop: 36 }}
//                 >
//                   <Button
//                     autoFocus
//                     variant='contained'
//                     color='primary'
//                     style={{ padding: '25px 60px' }}
//                     size='large'
//                     onClick={e => {
//                       setStep(0)
//                       setOpenBackDrop('init')
//                       setOpenMain(!openMain)
//                       setOpen(!open)
//                     }}
//                   >
//                     <Typography variant='body1'>{'Получил'}</Typography>
//                   </Button>
//                   <Button
//                     autoFocus
//                     variant='text'
//                     color='primary'
//                     style={{ padding: '25px 24px' }}
//                     size='large'
//                     onClick={e => {
//                       setStep(4)
//                       setOpenBackDrop(magicNotCourse)
//                       setOpenMain(!openMain)
//                       setOpen(!open)
//                     }}
//                   >
//                     <Typography variant='body2'>{'Нет, не получил'}</Typography>
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid item xs={6}>
//               <CardMedia
//                 image={adminImage.default}
//                 style={{ height: '100%' }}
//                 title='Contemplative Reptile'
//               />
//             </Grid>
//           </Paper>
//         </Grid>
//       </Container>
//     </Dialog>
//   )
// }

// export default DialogHello
