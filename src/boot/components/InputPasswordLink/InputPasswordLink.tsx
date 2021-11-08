import {
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    FormHelperText,
    Link,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { FC, memo, useState } from 'react';

type InputPasswordLinkProps = {
    toGo: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
};

export const InputPasswordLink: FC<InputPasswordLinkProps> = memo(
    ({ toGo }) => {
        const [showPassword, setShowPassword] = useState(false);

        return (
            <FormControl fullWidth disabled>
                <InputLabel>Пароль</InputLabel>
                <Input
                    type="password"
                    value="123456q"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                disabled
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

                <FormHelperText style={{ textAlign: 'right' }}>
                    <Link
                        onClick={toGo}
                        style={{ cursor: 'pointer' }}
                        color="primary"
                    >
                        Сбросить пароль
                    </Link>
                </FormHelperText>
            </FormControl>
        );
    },
);
