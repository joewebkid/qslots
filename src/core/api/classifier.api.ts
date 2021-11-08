import { BaseAPI } from './base.api';
import { HTTP } from './api';

const classifierAPIInstance = new HTTP('/classifier');

export type LevelCareerProps = {
    id: number;
    label: number;
};

export type SexProps = {
    id: number;
    label: string;
    name: string
};

export class ClassifierAPI extends BaseAPI {
    static getLevelCareers(): Promise<LevelCareerProps[]> {
        return classifierAPIInstance.get('/user/level_career/', {});
    }

    static getSexs(): Promise<SexProps[]> {
        return classifierAPIInstance.get('/user/sex/', {});
    }
}
