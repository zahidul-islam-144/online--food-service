import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar} from '@fortawesome/free-solid-svg-icons'
// import Rating from 'react-rating';


const Experts = () => {
    const [abos, setAbos] = useState([]);
    const [allAbos, setAllAbos] = useState([]);
    useEffect(() => {
        fetch(
            'about.json'
        )
            .then((res) => res.json())
            .then((data) => setAllAbos(data));
    }, [abos]);
    return (
        <div className='m-5'>
            <h2 className="m-4 text-primary">Reviews</h2>
            <div className="bodys ">
                <div className="row">
                    {allAbos?.map((pd) => (
                        <div className= "container col-md-3">
                            <div className="cart border border-3 border-warning rounded">
                                <div className="cart-details ">

                                    <img className="w-50 rounded-circle p-1" src={pd.img} alt="" />
                                    <div>
                                        <h5 className="text-success">{pd.name}</h5>
                                        <h6 className="text-info m-1 ">{pd.description}</h6>
                                      <div className='m-2'>  <FontAwesomeIcon className="text-warning" icon={faStar} />
                                        <FontAwesomeIcon className="text-warning" icon={faStar} />
                                         <FontAwesomeIcon className="text-warning" icon={faStar} />
                                         <FontAwesomeIcon className="text-warning" icon={faStar} />
                                         <FontAwesomeIcon className="text-warning" icon={faStar} /></div>
                                        {/* <Rating
                    initialRating={faStar}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating> */}
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experts;