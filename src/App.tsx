import React from 'react';
import { createBrowserHistory } from 'history';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { ROUTES } from './router/routes';

const App = () => {
    const { HOME } = ROUTES;

    return (
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route path={HOME} exact component={Home} />
                <Redirect to={HOME} />
            </Switch>
        </Router>
    );
};

export default App;
