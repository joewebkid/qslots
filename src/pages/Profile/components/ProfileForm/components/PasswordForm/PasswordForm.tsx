import React, {
    FC,
    memo,
    useCallback,
    useMemo,
    useState,
} from 'react';
import { InputLink, InputPassword, InputPasswordLink } from '@boot/components';
import { ProfileAPI } from '@core/api';
import { passwordSelector } from '@core/store';
import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { editPasswordThunk, setEditPasswordThunk } from '@core/store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { PasswordConfig } from './PasswordForm.config';
import { StorePasswordProps, StoreProps } from "@core/store/store.types";

const useStyles = makeStyles(() => ({
    btn: {
        minWidth: 272,
        padding: '25px 24px',
        margin: '0px auto 28px',
    },
}));

export const PasswordForm: FC = memo(() => {
    const classes = useStyles();
    const dataPassword = useSelector(passwordSelector);
    const dispatch = useDispatch();

    const [isChangePassword, setIsChangePassword] = useState(false);

    const changePasswordHandle = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const { value, name } = event.target;
            dispatch(setEditPasswordThunk({ name, value }));
        },
        [dispatch],
    );

    const getCodePassword = useCallback(() => {
        ProfileAPI.getCodePassword();
    }, []);

    const showFormPassword = useCallback(() => {
        setIsChangePassword(!isChangePassword);
        if (!isChangePassword) {
            getCodePassword();
        }
    }, []);

    const editPassword = useCallback(() => {
        dispatch(editPasswordThunk());
        setIsChangePassword(false);
    }, [dispatch]);

    const isActiveBtn = useMemo(() => {
        if (
            dataPassword.code &&
            dataPassword.code.toString().length === 4 &&
            dataPassword.password.length &&
            dataPassword.password === dataPassword.passwordRetry
        ) {
            return false;
        }
        return true;
    }, [dataPassword, dataPassword.code]);

    const changePassword = useMemo(() => {
        if (!isChangePassword) {
            return (
                <Grid container xs={8} spacing={5}>
                    <Grid item xs={6}>
                        <InputPasswordLink toGo={showFormPassword} />
                    </Grid>
                </Grid>
            );
        }
        return (
            <Grid container xs={8} spacing={5}>
                {PasswordConfig.map((config) => (
                    <Grid item xs={6}>
                        {config.component === 'password' ? (
                            <InputPassword
                                {...config}
                                value={dataPassword[config.name]}
                                changeHandle={changePasswordHandle}
                            />
                        ) : (
                            <InputLink
                                {...config}
                                value={dataPassword[config.name]}
                                toGo={getCodePassword}
                                onChange={changePasswordHandle}
                            />
                        )}
                    </Grid>
                ))}
                <Grid item xs={6} key={`Btn${isActiveBtn}`}>
                    <Button
                        disabled={isActiveBtn}
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={editPassword}
                        className={classes.btn}
                    >
                        <Typography variant="body1">
                            Сохранить пароль
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        );
    }, [
        isChangePassword,
        dataPassword.code,
        dataPassword.password,
        dataPassword.passwordRetry,
        isActiveBtn,
    ]);

    return changePassword;
});
