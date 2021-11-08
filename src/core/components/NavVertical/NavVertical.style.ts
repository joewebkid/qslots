import { makeStyles } from '@material-ui/core';

const drawerWidth = 80;

export const useNavVerticalStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        width: 90,
    },

    btnMenuContainer: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: drawerWidth,
        margin: '0px auto',
        paddingBottom: 40,
        justifyContent: 'flex-end',
    },
    rootBtnMenu: {
        flexGrow: 1,
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.main,
        margin: 0,
        maxWidth: '100%',
    },
    btnMenu: {
        color: theme.palette.primary.contrastText,
        margin: 8,
        padding: 16,
        '& svg': {
            fontSize: 36,
        },
    },
    rootDrawer: {
        boxShadow: theme.shadows[24],
        width: 90,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        border: 0,
        whiteSpace: 'nowrap',
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: 90,
        border: 0,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        height: 90,
        ...theme.mixins.toolbar,
        border: 0,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
