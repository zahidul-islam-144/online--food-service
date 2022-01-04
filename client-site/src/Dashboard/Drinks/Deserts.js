import React, { useEffect, useState } from 'react';
import Services from '../../Pages/Home/Services/Services';
import Desert from './Desert';


const Deserts = () => {
    const [explores, setExplores] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/desert')

            .then(res => res.json())
            .then(data => setExplores(data));
    }, [])
    return (
        <div>
             <div id="services">
            <h2 className="text-primary m-4 text-success">Our Desert</h2>
            <div className="service-container">
                {
                    explores.map(explore => <Desert
                        key={explore.id}
                        explore={explore}
                    ></Desert>)
                }
            </div>
        
        </div>
        </div>
    );
};

export default Deserts;