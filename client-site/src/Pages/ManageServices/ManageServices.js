import React, { useEffect, useState } from 'react';
// import './AddServices.css';
import { Link } from 'react-router-dom';


const ManageServices = ({ order }) => {
    // const {service} = props;
    const { _id, email,name, price, address, img } = order;

            const [orders, setOrders]=useState([])
    
        useEffect(()=> {
    fetch(`http://localhost:5000/orders`)
    .then(res => res.json())
    .then(data => setOrders(data));
        }, [])
        const handleDelete = id => {
            const url = `http://localhost:5000/dltOrders/${id}`
            fetch(url, {
                method:'DELETE'
            })
            .then(res=> res.json())
            .then(data =>
                 {console.log(data)
            if(data.deletedCount > 0){
                alert('deleted')
                const remaining = orders.filter(order => order._id !== id);
                setOrders(remaining)
            }
        })
        }
    return (
        <div className="border border-1 border-dark mt-2">
            <img className="w-75" src={img} alt="" />
            <h4 className='mt-2'>{name}</h4>
            <h5>{email}</h5>
            <h5 className="px-3">{address}</h5>
            <h6>price: ${price}</h6>
            <button className='btn btn-danger m-2'>UPDATE</button> 
            <Link to={`/addService/${_id}`}> 
            <button className="btn btn-warning" onClick={() => handleDelete(order._id)}>DELETE</button>
            </Link>
        </div>
    );
    //id = _id
};

export default ManageServices;