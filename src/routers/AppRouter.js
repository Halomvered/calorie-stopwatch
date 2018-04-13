import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header'
import CalorieStopwatch from '../components/CalorieStopwatch'
import ProfilePage from '../components/ProfilePage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={CalorieStopwatch} exact={true} />
                <Route path="/new" component={CalorieStopwatch} />
                <Route path="/calender" component={CalorieStopwatch} />
                <Route path="/profile" component={CalorieStopwatch} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;