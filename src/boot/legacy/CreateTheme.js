import { createMuiTheme } from '@material-ui/core/styles'
import { red, green, orange, grey } from '@material-ui/core/colors'

const primary = '#fc6652'
const colorGreyBorder = '#е8е8е8'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fc665280',
      main: primary,
      contrastText: '#fff'
    },
    secondary: {
      main: green[700]
    },
    error: {
      light: red[50],
      main: red[500]
    }
  },

  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
    h1: {
      fontSize: '3rem', // 48
      fontWeight: 600,
      lineHeight: 1.1
    },
    h2: {
      fontSize: '2.25rem', //36
      fontWeight: 600,
      lineHeight: 1.1
    },
    h3: {
      fontSize: '2rem', // 32
      fontWeight: 600,
      lineHeight: 1.1
    },
    h4: {
      fontSize: '1.75rem', // 28
      fontWeight: 600,
      lineHeight: 1.1
    },
    h5: {
      fontSize: '1.5rem', // 24
      fontWeight: 400,
      lineHeight: 1.1
    },
    h6: {
      fontSize: '1.5rem', // 24
      fontWeight: 400,
      lineHeight: 1.1
    },
    body1: {
      fontSize: '1.125rem', // 18
      fontWeight: 400,
      lineHeight: 1.1
    },
    body2: {
      fontSize: '1.125rem', // 18
      fontWeight: 600,
      lineHeight: 1.1
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.1
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.1
    },
    button: {
      textTransform: 'none'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    },
    MuiFormGroup: {
      root: {
        maxWidth: '20rem',
        backgroundColor: 'white',
        width: '20rem'
      }
    },
    MuiFormControlLabel: {
      root: {
        padding: '0 0.5rem',
        paddingBottom: '0rem',
        paddingTop: '0rem',
        margin: '0.2rem',
        border: `0.1rem solid ${colorGreyBorder}`,
        borderRadius: 4,
        marginLeft: '0.0rem',
        marginRight: '0.0rem'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 0
      }
    },
    MuiList: {
      root: {
        maxWidth: '20rem',
        backgroundColor: 'white',
        width: '20rem'
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: '0.75rem',
        textAlign: 'center'
      }
    },
    MuiListItem: {
      root: {
        padding: '0 0.5rem',
        paddingBottom: '0rem',
        paddingTop: '0rem',
        margin: '0.5rem',
        border: `0.1rem solid ${colorGreyBorder}`,
        borderRadius: 4
      }
    },
    MuiMobileStepper: {
      root: {
        background: 'white',
        maxWidth: '5rem'
      }
    },
    MuiTextField: {
      root: {}
    },
    MuiInputLabel: {
      // formControl: {
      //   top: 0,
      //   left: '50%',
      //   transform: 'translate(-50%, 100%)',
      //   width: 'fit-content'
      // },
      // shrink: {
      //   transform: 'translate(-50%, 1.5px) scale(0.75)',
      //   transformOrigin: 'top'
      // }
    },
    MuiInputBase: {
      root: {},
      input: {
        textAlign: 'center'
      }
    }
  }
})
export { colorGreyBorder }
export default theme
