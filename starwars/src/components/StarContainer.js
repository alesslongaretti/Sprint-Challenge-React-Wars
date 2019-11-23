import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarCard from './StarCard';


export default function StarContainer () {

    const [starData, setStarData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/1/")
        .then(response => {
            setStarData(response.data);
            console.log(response);
        })


            .catch (error => console.log(error));

            }, []);


    

    return (
        <div className="star">
             <StarCard 
            name ={starData.name}
            />

        </div>
    );
}