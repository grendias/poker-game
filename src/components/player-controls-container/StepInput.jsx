import React from 'react';

const StepInput = ({ maxAmount }) => {
    return <div className="step-input">
        <input type="number" placeholder="Enter amount" step="10" min="0" max={`${maxAmount}`}/>
    </div>
};


export default StepInput;



