import { combineReducers } from 'redux';
import { AppActions } from '../actions';
import { app, AppState } from './app/reducers';

export interface ReduxState {
    app: AppState;
}

export default combineReducers<ReduxState, AppActions>({
    app
});
