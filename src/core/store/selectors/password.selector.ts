import { StorePasswordProps, StoreProps } from '../store.types';

export const passwordSelector = (store: StoreProps):StorePasswordProps => ({
    ...store.password,
}) as StorePasswordProps;
