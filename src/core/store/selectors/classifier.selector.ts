import { StoreClassifiersProps, StoreProps } from '../store.types';

export const classifierSelector = (store: StoreProps): StoreClassifiersProps => ({
    ...store.classifiers,
}) as StoreClassifiersProps;
