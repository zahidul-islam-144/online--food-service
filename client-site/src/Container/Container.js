import React, { useEffect, useState } from 'react';
import Service from '../service/service';
import Checkout from '../Checkout/Checkout';
import './Container.css';
//Cart container  component
const Container = () => {
    //declare state
    const [containers, setContainers] = useState([]);
    const [addMember, setAddMember] = useState([]);
    //fetch data using useEffect
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setContainers(data));
    }, []);
    // Hire me Btn handler
    const handleHireMe = Programmer => {
        const addNewCart = [...addMember, Programmer]
        setAddMember(addNewCart);


    }
    return (
        <div className="container">
            {/* programmers area */}
            <div className="Programmer">
                {
                    containers.map(programmer => <Service
                        key={programmer.id}
                        programmer={programmer}
                        handleHireMe={handleHireMe}
                    >

                    </Service>)
                }
            </div>
            {/* cart added area */}
            <div className="Programmers-calculation">
                {
                    <Checkout addMember={addMember}></Checkout>
                }
            </div>
        </div>
    );
};

export default Container;