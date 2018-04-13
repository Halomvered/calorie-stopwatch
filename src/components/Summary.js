import React from 'react';

const Summary = (props) => {
    const whenBurned = props.renderedFromCalender ? '' : 'today';
    return (
        <div>
            <h4>Total calories burned {whenBurned}: {props.totalCaloriesToday}</h4>
        </div>
    )
}

export default Summary;