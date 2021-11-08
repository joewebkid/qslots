import { createMuiTheme } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';

export const Theme = createMuiTheme({
    palette: {
        divider: '#е8е8е8',
        grey: {
            200: '#е8е8е8',
            300: '#d9d9d9',
            400: '#b6b6b6',
            700: '#525151',
            900: '#171716',
        },
        primary: {
            light: '#fc665280',
            main: '#fc6652',
            contrastText: '#fff',
        },
        secondary: {
            main: green[700],
        },
        error: {
            light: red[50],
            main: red[500],
        },
    },

    typography: {
        fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
        h1: {
            fontSize: '3rem', // 48
            fontWeight: 600,
            lineHeight: 1.1,
        },
        h2: {
            fontSize: '2.25rem', // 36
            fontWeight: 600,
            lineHeight: 1.1,
        },
        h3: {
            fontSize: '2rem', // 32
            fontWeight: 600,
            lineHeight: 1.1,
        },
        h4: {
            fontSize: '1.75rem', // 28
            fontWeight: 600,
            lineHeight: 1.1,
        },
        h5: {
            fontSize: '1.5rem', // 24
            fontWeight: 400,
            lineHeight: 1.1,
        },
        h6: {
            fontSize: '1.5rem', // 24
            fontWeight: 400,
            lineHeight: 1.1,
        },
        body1: {
            fontSize: '1.125rem', // 18
            fontWeight: 400,
            lineHeight: 1.1,
        },
        body2: {
            fontSize: '1.125rem', // 18
            fontWeight: 600,
            lineHeight: 1.1,
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.1,
        },
        subtitle2: {
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: 1.1,
        },
        button: {
            textTransform: 'none',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
            },
        },
        MuiFormGroup: {
            root: {
                maxWidth: '20rem',
                backgroundColor: 'white',
                width: '20rem',
            },
        },
        MuiFormControlLabel: {
            // root: {
            //     padding: '0 0.5rem',
            //     paddingBottom: '0rem',
            //     paddingTop: '0rem',
            //     margin: '0.2rem',
            //     border: '0.1rem solid #е8е8е8',
            //     borderRadius: 4,
            //     marginLeft: '0.0rem',
            //     marginRight: '0.0rem',
            // },
        },
        // MuiListItemIcon: {
        //     root: {
        //         minWidth: 0,
        //     },
        // },
        // MuiList: {
        //     root: {
        //         maxWidth: '20rem',
        //         backgroundColor: 'white',
        //         width: '20rem',
        //     },
        // },
        MuiFormHelperText: {
            root: {
                fontSize: '0.75rem',
                textAlign: 'center',
            },
        },
        // MuiListItem: {
        //     root: {
        //         padding: '0 0.5rem',
        //         paddingBottom: '0rem',
        //         paddingTop: '0rem',
        //         margin: '0.5rem',
        //         border: '0.1rem solid #е8е8е8',
        //         borderRadius: 4,
        //     },
        // },
        MuiMobileStepper: {
            root: {
                background: 'white',
                maxWidth: '5rem',
            },
        },
        MuiTextField: {
        },
        MuiInputLabel: {
            // formControl: {
            //     top: 0,
            //     left: '50%',
            //     transform: 'translate(-50%, 100%)',
            //     width: 'fit-content',
            // },
            // shrink: {
            //     transform: 'translate(-50%, 1.5px) scale(0.75)',
            //     transformOrigin: 'top',
            // },
        },
        MuiInputBase: {

            input: {
                textAlign: 'center',
            },
        },
    },
});
