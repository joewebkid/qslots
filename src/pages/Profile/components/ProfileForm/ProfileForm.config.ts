import { ProfileProps } from '@core/api';

export type InputProps = {
    name: keyof ProfileProps;
    label: string;
    disabled?: boolean;
    component?: 'text' | 'select' | 'date';
};

export type FormConfigProps = InputProps[];

export enum FormConfigNames {
    LOGIN = 'login',
    PHONE = 'mobile_phone',
    NAME = 'name',
    SEX = 'sex',
    SURNAME = 'surname',
    BIRTHDATE = 'birthdate',
    PATRONYMIC = 'patronymic',
    CAREER_LEVEL = 'career_level'
}

export const FormConfig: FormConfigProps = [
    {
        name: 'login',
        label: 'Логин',
        disabled: true,
    },
    {
        name: 'mobile_phone',
        label: 'Телефон',
        disabled: true,
    },
    {
        name: 'name',
        label: 'Имя',
    },
    {
        name: 'sex',
        label: 'Пол',
        component: 'select',
    },
    {
        name: 'surname',
        label: 'Фамилия',
    },
    {
        name: 'birthdate',
        label: 'Дата рождения',
        component: 'date',
    },
    {
        name: 'patronymic',
        label: 'Отчество',
    },
    {
        name: 'career_level',
        label: 'Уровень специальности',
        component: 'select',
    },
];
