import { BaseAPI } from './base.api';
import { HTTP } from './api';

const signupAPIInstance = new HTTP('/statistics');

export type TypeStatisticLinkProps = {
    type: 'general' | 'proctoring' | 'verification_done' | 'verification_goto';
};

export type ResponceStatisticsLinkProps = TypeStatisticLinkProps & {
    label: string;
    link: string;
};

export type ResponceStatisticsResultProps = {
    color: number;
    value: number;
};

export type KeyCourse = 'sub_system' | 'system' | 'test';

export type ResponceStatisticsProps = {
    create_dt: number;
    links: ResponceStatisticsLinkProps[];
    result: ResponceStatisticsResultProps;
    sub_system: string;
    system: string;
    test: string;
    id?: string;
    value?: number;
};

export class StatisticsAPI extends BaseAPI {
    static getStatistics(): Promise<ResponceStatisticsProps[]> {
        return signupAPIInstance.post('/search/', { });
    }
}
