import React from 'react';
import caloriesBurned, { personalMET, correctedMET} from '../utils/caloriesBurned';

const CaloriesTracker = (props) => {
    const { MET, time, name } = props.currentActivity;
    const { sex, age, height, weight } = props.currentUser;
    const errorCheck = props.activityExists;
    
    const pMET = personalMET(sex, age, height, weight);
    const cMET = correctedMET(pMET, MET);

    return (

        <div>
            {
                errorCheck ? 
                <p>{name} - Calories burned: {caloriesBurned(cMET, weight, time)}</p>
                :
                <h5>Please create a new timer, or resume an existing one.</h5>
            }
        </div>
    )
}

export default CaloriesTracker;