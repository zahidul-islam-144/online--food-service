import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Desert = ({explore} ) => {

    const { _id, name, price, desciption, img } = explore;
    return (
        <div className="pb-3">

            <img className="w-75" src={img} alt="" />
            <h3>{name}</h3>
            <h5>price:${price}</h5>
            <p>{desciption}</p>
            <Link to={`/purchase/${_id}`}>
            <button className="btn btn-success">Choose</button>
            </Link>
        </div>
    );
};

export default Desert;