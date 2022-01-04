import React, { useEffect, useState } from 'react';
import Services from '../../Pages/Home/Services/Services';
import Explore from './Explore';

const Parcels = () => {
    const [explores, setExplores] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/parcel')

            .then(res => res.json())
            .then(data => setExplores(data));
    }, [])
    return (
        <div>
             <div id="services">
            <h2 className="text-primary m-4 text-success">Daily-Parcel</h2>
            <div className="service-container">
                {
                    explores.map(explore => <Explore
                        key={explore.id}
                        explore={explore}
                    ></Explore>)
                }
            </div>
       
        </div>
        </div>
    );
};

export default Parcels;