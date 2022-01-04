import React from 'react';
import './Search.css';
import JSONDATA from '../../../../Aboutus/services.json';
import {useState} from 'react';


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="App">
        <input type='text' placeholder='Search...' onChange={event => {setSearchTerm(event.target.value)}} />
        {JSONDATA.filter((val) => {
          if (searchTerm == ""){
            return val
          } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((val, key) => {
          return (
            <div className='user' key={key}>
             <p>{val.name}</p>
             <p>{val.offer}</p>
             <p>{val.description}</p> 
            </div>
          );
        })}
      </div>
    );
};

export default Search;