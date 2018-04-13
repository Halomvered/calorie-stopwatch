import React from 'react';
import activityTypes from '../data/METData';
import { Redirect } from 'react-router-dom';

class NewTimerPage extends React.Component {

    state =  {
        search: '',
    }

    handleFilterActivities = (e) => {
        const search = e.target.value;        
        this.setState(() => ({ search }));
    }

    render() {
        if (this.props.redirect) {
            return <Redirect push to="/" />;
        }
        return (
            <div>
            <label>
                    <input 
                    type="text"
                    value={this.state.search}
                    onChange={this.handleFilterActivities}
                    placeholder="Search for an activity"
                    />
            </label>
            <ul>
                { 
                    this.state.search &&
                    activityTypes.map((activity, i) => {
                    if (activity.description.indexOf(this.state.search) !== -1) {
                        return (
                        <li
                        key={`${activity.description}${i}`}
                        >
                            <button
                            data-met={activity.MET}
                            data-name={activity.description}
                            onClick={this.props.handleChosenActivity}
                            key={`${activity.description}`} 
                            >
                                {activity.description}
                            </button>
                        </li>
                        )
                    }
                })
                }
            </ul>
            </div>
        )
    }
}

export default NewTimerPage