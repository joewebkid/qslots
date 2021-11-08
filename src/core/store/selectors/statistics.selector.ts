import { StoreProps } from '../store.types';

export const statisticsSelector = (store: StoreProps) => ({
    ...store.statistics,
});
