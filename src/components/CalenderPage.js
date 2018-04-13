import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker, } from 'react-dates';
import moment from 'moment';
import PastActivities from './PastActivities';
import Summary from './Summary';
import totalCalories from '../utils/totalCalories'
import { Redirect } from 'react-router-dom';





class CalenderPage extends React.Component {
    state = {
        createdAt: moment(),
        focused: false
    }

    onDateChange = (createdAt) => this.setState({ createdAt });
    onFocusChange = ({ focused }) => this.setState({ focused });

    render(){

        if (this.props.redirect) {
            return <Redirect push to="/" />;
        }

        const weight = this.props.state.currentUser.weight;

        const pastActivites = this.props.state.pastActivites
        .filter((activity) => 
        activity.createdAt.format('L') === this.state.createdAt.format('L'));

        const totalPastCalories = totalCalories(pastActivites, weight);
        
        const allowReuseButton = this.state.createdAt.format('L') === moment().format('L');
        return (
        <div>
            <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.focused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={2} 
            isOutsideRange={() => false}
            orientation="vertical"
            />
            <PastActivities 
            pastActivites={pastActivites} 
            userWeight={weight}
            renderedFromCalender={true}
            />
            {
                pastActivites &&
                <button
                disabled={allowReuseButton}
                data-createdat={this.state.createdAt.format('L')}
                onClick={this.props.onResumeDay}
                >Re-use activities</button>
            }
            <Summary 
            renderedFromCalender={true}
            totalCaloriesToday={totalPastCalories}
            />
        </div>
    )
}
}

export default CalenderPage;