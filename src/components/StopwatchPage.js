import React from 'react';
import Timer from './Timer';
import CaloriesTracker from './CaloriesTracker';
import Controls from './Controls';
import PastActivities from './PastActivities';
import caloriesBurned from '../utils/caloriesBurned';
import Summary from './Summary';
import totalCalories from '../utils/totalCalories'


const StopwatchPage = (props) => {
    const state = props.state;        
    const userWeight = state.currentUser.weight;
    const totalCaloriesToday = totalCalories(state.pastActivites, userWeight);
    
        return (
            <div>
                <Timer time={state.currentActivity.time} />
                <CaloriesTracker 
                currentActivity={state.currentActivity}
                currentUser={state.currentUser}
                activityExists={state.activityExists}
                />
                <Controls 
                onStart={props.onStart} 
                onStop={props.onStop} 
                onSave={props.onSave}
                onReset={props.onReset}
                isRunning={props.isRunning} 
                />
                <PastActivities 
                userWeight={userWeight} 
                pastActivites={state.pastActivites}
                onRemoveItem={props.onRemoveItem}
                onResumeItem={props.onResumeItem}
                />
                <Summary totalCaloriesToday={totalCaloriesToday} />
            </div>
        )
}

export default StopwatchPage;