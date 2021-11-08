import React, { FC, memo, useCallback, useState, useEffect, useMemo } from 'react';
import { classifierSelector, profileSelector } from '@core/store';
import { getProfileThunk, setEditProfileThunk } from '@core/store/actions';
import {
    Button,
    Grid,
    makeStyles,
    TextField,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { LevelCareerProps } from '@core/api';
import { FormConfig, InputProps } from './ProfileForm.config';
import { PasswordForm } from './components';

import './ProfileForm.scss';

const useStyles = makeStyles(() => ({
    root: {
        '& .MuiFormControl-root': {
            '& .MuiInput-input': {
                textAlign: 'start',
            },
        },
    },
}));

export const ProfileForm: FC = memo(() => {
    const classes = useStyles();
    const [changed, setChanged] = useState(false);
    const dispatch = useDispatch();
    const profile = useSelector(profileSelector);
    const classifiers = useSelector(classifierSelector);
    useEffect(() => {
        dispatch(getProfileThunk());
    }, []);

    const changeHandle = () => {
        setChanged(true);
    };

    const personalSubmitHandle = (e: any) => {
        e.preventDefault();
        dispatch(setEditProfileThunk(e.target.elements));
        setChanged(false);
    };

    const SelectFieldProfile = useCallback(
        (config: InputProps, data: LevelCareerProps[], hasEmpty: boolean = true) => (
            <FormControl fullWidth>
                <InputLabel>{config.label}</InputLabel>
                <Select
                    defaultValue={profile[config.name]}
                    name={config.name}
                    onChange={changeHandle}
                >
                    {hasEmpty && <MenuItem value="-1"><>&nbsp;</></MenuItem>}
                    {data.map((obj) => (
                        <MenuItem value={obj.id} key={obj.id}>
                            {obj.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        ),
        [classifiers],
    );

    const TextFieldProfile = useCallback(
        (config: InputProps) => {
            if (
                config?.component === 'select' &&
                classifiers.sex &&
                classifiers.career_level
            ) {
                switch (config.name) {
                case 'sex':
                    return SelectFieldProfile(
                        config,
                        (classifiers.sex as unknown) as LevelCareerProps[],
                        false
                    );
                default:
                    return SelectFieldProfile(
                        config,
                        classifiers.career_level,
                    );
                }
            }
            if (config?.component === 'date') {
                return (
                    <TextField
                        {...config}
                        type="date"
                        fullWidth
                        defaultValue={moment(profile[config.name]).format(
                            'YYYY-MM-DD',
                        )}
                        onChange={changeHandle}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                );
            }
            return (
                <TextField
                    {...config}
                    fullWidth
                    defaultValue={profile[config.name]}
                    onChange={changeHandle}
                />
            );
        },
        [classifiers],
    );

    const formPersonal = useMemo(() => {
        if (!profile) {
            return null;
        }

        return (
            <Grid container xs={8} spacing={5} justify="flex-end">
                {FormConfig.map((config) => (
                    <Grid item xs={6}>
                        {TextFieldProfile(config)}
                    </Grid>
                ))}
                <Grid item xs={6} className="profile-form__personal-submit">
                    <Button
                        disabled={!changed}
                        className="profile-form__personal-submit-btn"
                        variant="contained"
                        color="primary"
                        size="large"
                        type="submit"
                    >
                        <Typography variant="body1">
                            Сохранить
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        );
    }, [profile, classifiers, changed]);

    return (
        <div>
            <form className={classes.root} noValidate key={profile?.id} onSubmit={personalSubmitHandle}>
                <Typography variant='h3' color='textSecondary' style={{ marginBottom: 30 }}>
                    Личные данные
                </Typography>
                {formPersonal}
            </form>
            <form className={classes.root} noValidate autoComplete="off">
                <Typography variant='h3' color='textSecondary' style={{ marginBottom: 30, marginTop: 30 }}>
                    Пароль
                </Typography>
                <PasswordForm />
            </form>
        </div>
    );
});
