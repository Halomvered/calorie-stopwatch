import React from 'react';

const Controls = (props) => {
    return (
        <div>
            <button 
            onClick={props.onStartStop}
            >
                {props.isRunning ? 'Stop' : 'Start'}
            </button>
            <button 
            onClick={props.onSave} 
            disabled={props.isRunning}
            >Save
            </button>
            <button 
            onClick={props.onReset} 
            disabled={props.isRunning}
            >Reset
            </button>
        </div>
    )
}

export default Controls;