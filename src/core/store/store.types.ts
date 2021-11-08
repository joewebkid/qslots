import { SnackBarDataProps } from '@boot/components';
import {
    CodeProps,
    KeyCourse,
    LevelCareerProps,
    ProfileProps,
    ResponceStatisticsProps,
} from '@core/api';
import { SexProps } from '@core/api/classifier.api';

export interface StoreProps {
    statistics: StoreStatisticsProps;
    auth?: StoreAuthProps;
    profile?: ProfileProps;
    classifiers?: StoreClassifiersProps;
    password?: StorePasswordProps;
    snackbar: StoreSnackBarProps,
}

export interface StoreClassifiersProps {
    sex?: SexProps[];
    career_level?: LevelCareerProps[];
}

export interface StoreStatisticsProps {
    data?: ResponceStatisticsProps[];
    result?: ResponceStatisticsProps[];
    filter?: FilterStatisticsProps;
}

export type Obj = {
    id: string;
    label: string;
};

export type StorePasswordProps = CodeProps & {
    passwordRetry: string;
}

export type FilterStatisticsProps = {
    [key in KeyCourse]?: string;
} & {
    create_dt?: number;

    sub_system_data: Obj[];
    system_data: Obj[];
    test_data: Obj[];
};

export type StoreAuthProps = {
    userToken?: string;
};

export interface StoreSnackBarProps extends SnackBarDataProps {
    isVisible: boolean
}
