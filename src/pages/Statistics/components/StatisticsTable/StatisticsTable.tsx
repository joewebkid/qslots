import * as React from 'react';
import moment from 'moment';
import { DataGrid, GridColumns, GridToolbarContainer } from "@material-ui/data-grid";
import { useSelector } from 'react-redux';
import { statisticsSelector } from '@core/store';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import { FilterTable, ProgressBar, RenderDownload } from './components';

import './StatisticsTable.scss'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        '& * .Mui-odd': {
            backgroundColor: 'rgba(252, 102, 82, 0.08)',
        },
        '& .MuiDataGrid': {
            '&-colCell-draggable': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            '&-colCellTitleContainer': {
                flexGrow: 1,
            },
            '&-colCellTitle': {
                fontWeight: 600,
            },
            '&-columnsContainer': {
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                '& .MuiDataGrid-sortIcon': {
                    color: 'white',
                },
            },
            '&-cell': {
                display: 'flex',
                justifyContent: 'center',
            },
        },
    },
    toolbar: {
        justifyContent: 'flex-end',
    },
}));

function CustomToolbar() {
    const classes = useStyles();
    return (
        <GridToolbarContainer className={classes.toolbar}>
            <FilterTable/>
        </GridToolbarContainer>
    );
}

const columns: GridColumns = [
    {
        field: 'create_dt',
        headerName: 'Дата',
        flex: 120,
        sortable: true,
        editable: false,
        disableColumnMenu: true,
        valueFormatter: ({value}): string => moment(value as Date).format('DD.MM.YYYY')
    },
    {
        field: 'system',
        headerName: 'Система',
        flex: 120,
        sortable: false,
        editable: false,
        disableColumnMenu: true
    },
    {
        field: 'sub_system',
        headerName: 'Подсистема',
        flex: 120,
        sortable: false,
        disableColumnMenu: true,
        editable: false
    },
    {
        field: 'test',
        headerName: 'Тест',
        flex: 120,
        sortable: false,
        disableColumnMenu: true,
        editable: false
    },
    {
        field: 'value',
        headerName: 'Результат',
        flex: 120,
        sortable: false,
        disableColumnMenu: true,
        editable: false,
        renderCell: ({value}): React.ReactElement => <ProgressBar value={Number(value)}/>
    },
    {
        field: 'links',
        headerName: 'Скачать',
        flex: 120,
        sortable: false,
        disableColumnMenu: true,
        editable: false,
        renderCell: ({value}) => RenderDownload(value)
    }
];

export const StatisticsTable: React.FC = () => {
    const classes = useStyles();
    const { result } = useSelector(statisticsSelector);

    const statisticTable = React.useMemo(() => (
        <DataGrid
            className={classes.root}
            rows={result && result.length ? result : []}
            columns={columns}
            rowHeight={60}
            pageSize={5}
            components={{
                Toolbar: CustomToolbar
            }}
        />
    ), [result]);

    return (
        <div className="statistics-table">
            {statisticTable}
        </div>
    );
}
