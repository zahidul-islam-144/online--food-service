import React, { useEffect, useState } from 'react';
import Services from '../../Pages/Home/Services/Services';
import Explore from './Explore';
import Map from './Map/Map';
import Parcels from './Parcels';

const Explores = () => {
    const [explores, setExplores] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/ride')

            .then(res => res.json())
            .then(data => setExplores(data));
    }, [])
   
    return (
        <div>
             <div id="services">
            <h2 className="text-primary m-4 text-success">Daily-Rides</h2>
            <div className="service-container">
                {
                    explores.map(explore => <Explore
                        key={explore.id}
                        explore={explore}
                    ></Explore>)
                }
            </div>
        <Parcels></Parcels>

        <Map></Map>
        </div>
        </div>
    );
};

export default Explores;