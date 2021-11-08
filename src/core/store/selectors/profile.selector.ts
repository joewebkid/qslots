import { StoreProps } from '../store.types';
import { ProfileProps } from "@core/api";

export const profileSelector = (store: StoreProps): ProfileProps => ({
    ...store.profile,
}) as ProfileProps;
