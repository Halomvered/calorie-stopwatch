import React from 'react';
import StopwatchPage from './StopwatchPage';
import NewTimerPage from './NewTimerPage';
import CalenderPage from './CalenderPage';
import ProfilePage from './ProfilePage';
import { defaultState } from '../utils/defaultState';

// Remove later
import uuid from 'uuid';
import moment from 'moment';


class CalorieStopwatch extends React.Component {    
    state =  {
        currentUser: {
            age: 0,
            sex: 'male',
            height: 0,
            weight: 50,

        },
        currentActivity: {
                MET: 0,
                time: 0,
                name: "",
                id: 0,
                createdAt: 0
        },
        pastActivites: [
            {
                MET: 6,
                time: 5353535,
                name: "Dancing",
                id: uuid(),
                createdAt: moment()
            },
            {
                MET: 10,
                time: 1800000,
                name: "Running Uphill",
                id: uuid(),
                createdAt: moment()
            },
            {
                MET: 11,
                time: 1806600,
                name: "I'm from yesterday",
                id: uuid(),
                createdAt: moment().subtract(1, 'days')
            },
            {
                MET: 8,
                time: 1100000,
                name: "Climbing Trees",
                id: uuid(),
                createdAt: moment()
            }
        ],
        isRunning: false,
        activityExists: false,
        redirect: false
    };


    timeRef = null;

    onStart = () => {
        if (this.state.currentActivity.MET === 0) {
            this.setState(() => ({ 
                activityExists: false
             }));
             return;
        }; 

        this.setState((prevState) => ({ 
            isRunning: !prevState.isRunning,
            activityExists: true
            }));
        
        const activity = this.state.currentActivity;
        this.timeRef = setInterval(() => {
            activity.time += 100;
            this.setState(() => ({ activity }))
        }, 100);
        
    };

    onStop = () => {
        this.setState((prevState) => ({ 
            isRunning: !prevState.isRunning
         }))
        clearInterval(this.timeRef);
    };
    
    onSave = () => {
                if (this.state.currentActivity.name === '') return;

                const latestActivity = this.state.currentActivity;
                const pastActivites = [latestActivity, ...this.state.pastActivites];
        
                this.setState(() => ({
                    pastActivites,
                    activityExists: false,
                    currentActivity: defaultState
                }));
    };

    onReset = () => {
        const activity = this.state.currentActivity;
        activity.time = 0;
        this.setState(() => ({ activity }));
    };

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        const currentUser = {
            ...this.state.currentUser,
            [name]: value
        };

        this.setState(() => ({ currentUser }));
    };

    handleChosenActivity = (e) => {
        const currentActivity = {
            MET: e.target.dataset.met,
            time: 0,
            name: e.target.dataset.name
        }
        this.setState((prevState) => ({ 
            redirect: true,
            activityExists: true,    
            currentActivity
        }));

        setTimeout(() => {
            this.setState(() => ({ redirect: false }))
        }, 1000);
    };

    onRemoveItem = (e) => {
        const id = e.target.dataset.key;
        const pastActivites = this.state.pastActivites
        .filter((activity) => activity.id !== id);
        
        this.setState(() => ({ pastActivites }));
    };

    onResumeItem = (e) => {
        const id = e.target.dataset.key;

        const currentActivity = this.state.pastActivites
        .filter((activity) => activity.id === id)[0];
        
        let pastActivites = this.state.pastActivites
        .filter((activity) => activity.id !== id);

        if (this.state.currentActivity.MET) {
            pastActivites = [this.state.currentActivity, ...pastActivites];
        };
        
        this.setState((prevState) => ({
            pastActivites,
            currentActivity,
            activityExists: true
        }));        
    };

    onResumeDay = (e) => {
        const dayCreatedAt = e.target.dataset.createdat;
        const today = new Date();
        const newDate = moment(today);
        
        let pastActivites = this.state.pastActivites
        .filter((pastActivity) => pastActivity.createdAt.format('L') === dayCreatedAt)
        .map((pastActivity) => {     

            return {
                ...pastActivity,
                id: uuid(),
                time: 0,
                createdAt: moment()
            };
        });

        pastActivites = [...pastActivites, ...this.state.pastActivites];
        
        this.setState(() => ({ 
            pastActivites,
            redirect: true,
         }));

         setTimeout(() => {
            this.setState(() => ({ redirect: false }))
        }, 1000);
        
    };

    render() {
        const path = this.props.match.path;

        const renderComponent = 

        path === '/' ? 
        <StopwatchPage 
        state={this.state}
        onStart={this.onStart}
        onStop={this.onStop}
        onSave={this.onSave}
        onReset={this.onReset}
        onRemoveItem={this.onRemoveItem}
        onResumeItem={this.onResumeItem}
        />
        :
        path === '/new' ? 
        <NewTimerPage 
        redirect={this.state.redirect}
        currentActivityName={this.state.currentActivity.name}
        handleChosenActivity={this.handleChosenActivity}
        />
        :
        path === '/calender' ? 
        <CalenderPage 
        redirect={this.state.redirect}
        state={this.state}
        onResumeDay={this.onResumeDay}
        />
        :
        path === '/profile' ? 
        <ProfilePage 
        handleChange={this.handleChange}
        currentUser={this.state.currentUser}
        />
        : '';

        return (
            <div>
                {renderComponent}
            </div>
        )
    }
}

export default CalorieStopwatch;

