import { createMuiTheme } from '@material-ui/core/styles'
import { red, green, orange, grey } from '@material-ui/core/colors'

const greyBorder = '#е8е8е8'
const colorText = '#171716'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: orange[50],
      main: '#fc6652',
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
    fontFamily: ['Monteserrat'].join(','),
    h1: {
      fontSize: '4rem',
      fontWeight: 900,
      lineHeight: '4.5rem'
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: '3rem'
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: '2.625rem',
      color: '#494947'
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: '2rem'
    },
    body1: {
      fontSize: '1.125rem',
      fontWeight: 400,
      lineHeight: '1.5rem'
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 300,
      lineHeight: '1rem'
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
        border: `0.1rem solid ${greyBorder}`,
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
        border: `0.1rem solid ${greyBorder}`,
        borderRadius: '0.2rem'
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

export default theme
