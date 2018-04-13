import React from 'react';

const Controls = (props) => {
    return (
        <div>
            <button onClick={props.onStart} disabled={props.isRunning}>Start</button>
            <button onClick={props.onStop}>Stop</button>
            <button onClick={props.onSave} disabled={props.isRunning}>Save</button>
            <button onClick={props.onReset} disabled={props.isRunning}>Reset</button>
        </div>
    )
}

export default Controls;