import React, { useState } from "react"

// Use updater functions to force "updates" of variable values in memory, i.e. 
// setCount(count+1); setCount(count+1) will not increase count by 2, but setCount(c=>c+1) etc...will
// Using updater function assembles functions in a queue, forcing updating/sequential execution rather than batch

function Counter() {

    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>

        </div>
    );

}

export default Counter