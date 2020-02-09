import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './app.css';

import Loading from './components/Loading';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <div style={{ float: "left", width: "20%" }}>
                    <div className="nav">
                        <ul className="nav-list">
                            <li><NavLink exact to="/" className="nav-link">主页</NavLink></li>
                            <li><NavLink to="/counter" className="nav-link">计数器</NavLink></li>
                            <li><NavLink to="/hehe" className="nav-link">hehe</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div style={{ overflow: "hidden" }}>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route exact path="/" component={lazy(() => import('./containers/Home'))} />
                            <Route path="/counter" component={lazy(() => import('./containers/Counter'))} />
                            <Route component={lazy(() => import('./containers/Error'))} />
                        </Switch>
                    </Suspense>
                </div>
            </BrowserRouter>
        )
    }
}