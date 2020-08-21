import { applyMiddleware, CombinedState, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { AppActions } from './actions';
import rootReducer, { ReduxState } from './reducers';

export default function configureStore(): Store<CombinedState<ReduxState>, AppActions> {
    const middleware = [thunk, logger];

    return createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
}
