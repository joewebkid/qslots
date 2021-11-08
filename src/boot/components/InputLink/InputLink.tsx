import {
    FormControl,
    Input,
    InputLabel,
    FormHelperText,
    Link,
} from '@material-ui/core';
import React, { FC, memo } from 'react';

type InputPasswordLinkProps = {
    name: string;
    value: any;
    label: string;
    toGo: (event: any) => void;
    onChange: (event: any) => void;
};

export const InputLink: FC<InputPasswordLinkProps> = memo(
    ({ toGo, label, ...props }) => (
        <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Input type="text" {...props} />

            <FormHelperText style={{ textAlign: 'right' }}>
                <Link
                    onClick={toGo}
                    style={{ cursor: 'pointer' }}
                    color="primary"
                >
                    Прислать код повторно?
                </Link>
            </FormHelperText>
        </FormControl>
    ),
);
