import React, { useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {
    createStyles,
    FormControl,
    IconButton,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    Theme,
} from '@material-ui/core';
import { Clear, FilterList } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { statisticsSelector } from '@core/store';
import { setFilterThunk } from '@core/store/actions';
import { KeyCourse } from '@core/api';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) => createStyles({
    formControl: {
        minWidth: 200,
        margin: theme.spacing(0.5),
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    iconClear: {
        color: theme.palette.error.main,
        maxHeight: 48,
    },
}));

export function FilterTable() {
    const classes = useStyles();

    const { filter } = useSelector(statisticsSelector);
    const dispatch = useDispatch();

    const changeFilterHandle = useCallback(
        (
            e: React.ChangeEvent<{
                name?: string | undefined;
                value: unknown;
            }>,
        ) => {
            const { name, value } = e.target;
            if (filter && name && value) {
                const tempFilter = filter;
                tempFilter[name as KeyCourse] = value as string;
                dispatch(setFilterThunk(tempFilter));
            }
        },
        [dispatch, filter],
    );

    const changeFilterDateHandle = useCallback(
        (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            const { value } = event.target;
            const date = moment(value)
                .startOf('day')
                .format('X');
            if (!Number.isNaN(Number(date)) && filter) {
                const tempFilter = filter;
                tempFilter.create_dt = Number(date);
                dispatch(setFilterThunk(tempFilter));
            }
        },
        [dispatch, filter],
    );

    const clearFilterHandle = useCallback(() => {
        if (filter) {
            const tempFilter = filter;
            tempFilter.create_dt = undefined;
            tempFilter.system = undefined;
            tempFilter.sub_system = undefined;
            tempFilter.test = undefined;
            dispatch(setFilterThunk(tempFilter));
        }
    }, [dispatch, filter]);

    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <IconButton color="primary" {...bindTrigger(popupState)}>
                        <FilterList />
                    </IconButton>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'center',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'center',
                            horizontal: 'right',
                        }}
                    >
                        <Box p={1} display="flex" alignItems="center">
                            <TextField
                                id="date"
                                label="Дата"
                                type="date"
                                variant="outlined"
                                value={
                                    filter?.create_dt
                                        ? moment(
                                              Number(filter.create_dt * 1000),
                                          ).format('YYYY-MM-DD')
                                        : ''
                                }
                                onChange={changeFilterDateHandle}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                className={classes.formControl}
                            />
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                            >
                                <InputLabel>Система</InputLabel>
                                <Select
                                    value={filter?.system}
                                    name="system"
                                    onChange={changeFilterHandle}
                                >
                                    {filter?.system_data?.map((obj) => (
                                        <MenuItem value={obj.id}>
                                            {obj.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                            >
                                <InputLabel>Подсистема</InputLabel>
                                <Select
                                    value={filter?.sub_system}
                                    name="sub_system"
                                    onChange={changeFilterHandle}
                                >
                                    {filter?.sub_system_data?.map((obj) => (
                                        <MenuItem value={obj.id}>
                                            {obj.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl
                                variant="outlined"
                                className={classes.formControl}
                            >
                                <InputLabel>Тест</InputLabel>
                                <Select
                                    value={filter?.test}
                                    name="test"
                                    onChange={changeFilterHandle}
                                >
                                    {filter?.test_data?.map((obj) => (
                                        <MenuItem value={obj.id}>
                                            {obj.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <IconButton
                                className={classes.iconClear}
                                onClick={clearFilterHandle}
                            >
                                <Clear />
                            </IconButton>
                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}
