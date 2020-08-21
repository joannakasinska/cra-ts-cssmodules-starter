import { ReduxState } from '../reducers';
import { ChangeLocale } from './changeLocale';

export type AppActions = ChangeLocale;

export type Action = AppActions;

export type ThunkAction = (dispatch: (action: Action | ThunkAction) => void, getState: () => ReduxState) => void;
