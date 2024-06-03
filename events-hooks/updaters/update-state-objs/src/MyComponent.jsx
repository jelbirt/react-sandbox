// Spread operator ... passes the original object with all values

import React, {useState} from 'react';

function MyComponent() {
    
    const [car, setCar] = useState({year: 2024, 
                                    make: "Honda", 
                                    model: "Civic"});

    function handleYearChange(event) {
        // setCar({...car, year: event.target.value}); Prior to implementing an updater function
        setCar(c =>({...c, year: event.target.value}));  //Implements updater function
    }

    function handleMakeChange(event) {
        setCar(c=>({...c, make: event.target.value}));
    }

    function handleModelChange(event) {
        setCar(c=>({...c, model: event.target.value}));
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        
            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
            <input type="text" value={car.model} onChange={handleModelChange}/><br/>
        </div>
    );
}

export default MyComponent