import React from 'react'
import PastActivity from './PastActivity'
import uuid from 'uuid'

const PastActivities = (props) => {    
    const activitiesList = props.pastActivites
    .map((activity,i) => 
        <PastActivity 
        key={`${activity.name}${activity.time}${i}`} 
        activity={activity} 
        userWeight={props.userWeight}
        onRemoveItem={props.onRemoveItem}
        onResumeItem={props.onResumeItem}
        renderedFromCalender={props.renderedFromCalender}
        />
    );

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Activity</th>
                        <th>Time</th>
                        <th>Calories</th>
                        { !props.renderedFromCalender &&
                        ([
                            <th key={uuid()}></th>,
                            <th key={uuid()}></th>
                        ])
                        }
                    </tr>
                </thead>
                <tbody>
                    {activitiesList}
                </tbody>
            </table>
        </div>
    )
}

export default PastActivities