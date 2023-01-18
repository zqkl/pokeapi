import React, { useEffect, useState } from  'react';
import axios from 'axios';

const SomeComponent = props =>{
    const[responseData, setResponseData] = useState(null);

    const pokeButton= () =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
        .then(response =>{setResponseData(response.data)})

    }
    
    return(
        <div>
            <h1>Fetch pokemans</h1>
            <button onClick={pokeButton}>fetch em all</button>
            <div>
                {responseData&&
                <div>{responseData.results.map((item) => {
                    return <p key={item.name}>{item.name}</p>
                })}
                </div>
                }
            </div>
        </div>
    )
}
export default SomeComponent;

