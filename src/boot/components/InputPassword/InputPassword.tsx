import { passwordSelector } from '@core/store';
import {
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    FormHelperText,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { FC, memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const EXP_PASSWORD = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})/;

type InputPasswordProps = {
    name: string;
    value: any;
    label: string;
    changeHandle: (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => void;
};

export const InputPassword: FC<InputPasswordProps> = memo(
    ({ changeHandle, label, ...props }) => {
        const dataPassword = useSelector(passwordSelector);

        const [showPassword, setShowPassword] = useState(false);
        const [error, setError] = useState<string>('');

        useEffect(() => {
            if (props.name === 'passwordRetry') {
                if (dataPassword.password !== dataPassword.passwordRetry) {
                    setError('Пароли не совпадают');
                    return;
                }
            } else if (props.name === 'password') {
                if (
                    !dataPassword.password ||
                    !String(dataPassword.password).match(EXP_PASSWORD)
                ) {
                    setError(
                        'Ваш пароль должен содержать не менее 6 символов: буквы латинского алфавита, цифры',
                    );
                    return;
                }
            }
            setError('');
        }, [dataPassword.passwordRetry, dataPassword.password]);

        return (
            <FormControl fullWidth error={error.length !== 0}>
                <InputLabel htmlFor="standard-adornment-password">
                    {label}
                </InputLabel>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    {...props}
                    onChange={changeHandle}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                />

                <FormHelperText
                    id={`input_error_${props.name}`}
                    style={{ textAlign: 'center' }}
                >
                    {error}
                </FormHelperText>
            </FormControl>
        );
    },
);
