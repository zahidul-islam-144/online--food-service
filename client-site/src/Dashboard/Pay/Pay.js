import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Pay = () => {
    const { register,  } = useForm()
    return (
        <div className='bg-dark'>
           <img className="mt-4 mb-3 border border-3 border-primary rounded-3" width="16%" background-color="green" src="https://pbs.twimg.com/media/ELBTx2ZX0AEcVxQ.jpg" />
           <form className="w-100 mt-4" >
                <input className="rounded-3 border border-3 border-info p-2" {...register("number", { required: true, maxLength: 80 })} placeholder="Cradit Number" />
                <br />
                <input className="rounded-3 border border-3 border-info p-2"  {...register("number")} placeholder="Card Number" />
                <br />
                <input className="rounded-3 border border-3 border-info p-2" {...register("number")} placeholder="Debit Card" />
                <br />
                <input className="rounded-3 border border-3 border-info p-2" type="name" {...register("price")} placeholder="Name on Card" />
                <br />
                <input className="rounded-3 border border-3 border-info p-2" {...register("name")} placeholder="Expiry Date mm/dd/yy" />
                <br />
                {/* <input className="" type="book" /> */}
                <input type="submit" className="btn btn-primary text-white m-4" value="Pay" />
                {/* <Link to='www.paypal.com'></Link> */}
            </form>
       
        </div>
    );
};

export default Pay;