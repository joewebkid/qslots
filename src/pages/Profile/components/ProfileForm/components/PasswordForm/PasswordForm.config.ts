import { StorePasswordProps } from '@core/store/store.types';

export type PasswordConfigProps = {
    name: keyof StorePasswordProps;
    label: string;
    component: 'password' | 'input_link';
};

export const PasswordConfig: PasswordConfigProps[] = [
    {
        name: 'password',
        label: 'Новый пароль',
        component: 'password',
    },
    {
        name: 'passwordRetry',
        label: 'Повторите пароль',
        component: 'password',
    },
    {
        name: 'code',
        label: 'Код из СМС',
        component: 'input_link',
    },
];
