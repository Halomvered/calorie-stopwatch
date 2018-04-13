import React from 'react';
import timeFormat from '../utils/timeFormat';

const Timer = (props) => {
    const { time } = props;
    return (
        <div>
            <h1>{timeFormat(time)}</h1>
        </div>
    )
}

export default Timer;