import { createBrowserHistory } from 'history';
import React from 'react';
import { IntlProvider } from 'react-intl';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { CombinedState, Store } from 'redux';
import { Home } from './pages/home/Home';
import { ROUTES } from './router/routes';
import { AppActions } from './store/actions';
import { changeLocale } from './store/actions/changeLocale';
import configureStore from './store/configureStore';
import { ReduxState } from './store/reducers';
import * as translations from './translations';

const App = () => {
    const locale = 'en';
    const { HOME } = ROUTES;
    const store: Store<CombinedState<ReduxState>, AppActions> = configureStore();
    store.dispatch(changeLocale());

    return (
        <IntlProvider locale={locale} messages={translations.default[locale].messages}>
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route path={HOME} exact component={Home} />
                    <Redirect to={HOME} />
                </Switch>
            </Router>
        </IntlProvider>
    );
};

export default App;
