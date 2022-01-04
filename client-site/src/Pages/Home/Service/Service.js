import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name,offer,price, description, img } = service;
    console.log(service)
    return (
        <div className="service pb-3">
            <img className="w-50" src={img} alt="" />
            <h3>{name}</h3>
            <h6>{offer}</h6>
            <h6>{price}</h6>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Check Out</button>
                {/* <button onClick={onSignin} type="button" disabled={state.loading} className="bg-green-500 hover:bg-green-700 text-white tracking-wider w-full p-3 rounded-md shadow-md font-bold">
              {state.loading ? Signing in... : 'Signin'}
            </button> */}
            </Link>
        </div>
    );
    //id = _id
};

export default Service;