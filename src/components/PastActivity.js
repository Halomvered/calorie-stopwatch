import React from 'react';
import timeFormat from '../utils/timeFormat';
import caloriesBurned from '../utils/caloriesBurned';
import uuid from 'uuid';


const PastActivity = (props) => {
    const { MET, time, name, id} = props.activity;    
    return (
        <tr>
            <td>{name}</td>
            <td>{timeFormat(time)}</td>
            <td>{caloriesBurned(MET, props.userWeight, time)}</td>
            {
                !props.renderedFromCalender && [
                    <td key={uuid()}>
                        <button 
                        key={uuid()} 
                        data-key={id} 
                        onClick={props.onResumeItem}
                        >
                        Resume
                        </button>
                        </td>,
                    <td key={uuid()}>
                        <button 
                        key={uuid()} 
                        data-key={id} 
                        onClick={props.onRemoveItem}
                        >
                        Remove
                        </button>
                        </td>
                ]
            }
        </tr>
    )
}

export default PastActivity;