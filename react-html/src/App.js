import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './dev-style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Innerpage from './components/Innerpage';
import Login from './components/Login';

class App extends React.Component {
    render() {
        return (
            <>
                <BrowserRouter basename={'/anil/st-theme-13'}>
                    <Switch>
                        <Route path='/login'>
                            <Login />
                        </Route>
                        <Route path='/dashboard'>
                            <Dashboard />
                        </Route>
                        <Route path='/innerpage'>
                            <Innerpage />
                        </Route>
                        <Route path='/'>
                            <Login />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </>
        );
    };
};
export default App;