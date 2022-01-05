import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Checkout.css';

//add member and total expense component

const Checkout = (props) => {
    const { addMember } = props;
    const totalExpense = addMember.reduce((previous, current) => previous + current.salary, 0)
    return (
        <div className="cart-member">
            <h2><FontAwesomeIcon icon={faUser} /> Total Services: {addMember.length}</h2>
            <h3>Total Expense: ${totalExpense}</h3>
            <hr />
            <h2> <small><FontAwesomeIcon icon={faCheckCircle} /> Selected Services</small> </h2>
            {/* member name show part here  */}
            <ul className="list-container">
                {
                    addMember.map(singleMember => <li key={singleMember.id}>{singleMember.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Checkout;    