import React, { useEffect, useState } from 'react';
import Services from '../../Pages/Home/Services/Services';
import Deserts from './Deserts';
import Drink from './Drink';


const Drinks = () => {
    const [exploreses, setExploreses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/drinks')

            .then(res => res.json())
            .then(data => setExploreses(data));
    }, [])
   
    return (
        <div>
             <div id="services">
            <h2 className="text-primary m-4 text-success">Our Drinks</h2>
            <div className="service-container">
                {
                    exploreses.map(explores => <Drink
                        key={explores.id}
                        explores={explores} 
                    ></Drink>)
                }
            </div>
     <Deserts></Deserts>
        </div>
        </div>
    );
};

export default Drinks;