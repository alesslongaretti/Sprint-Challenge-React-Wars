import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StarCard from './StarCard';
import styled from 'styled-components';

const Wrap = styled.div`
display: flex;
flex-wrap: wrap;
background-color: rgba(255, 255, 255, 0.3); 
justify-content: center;

`;


export default function StarContainer () {

    const [starData, setStarData] = useState([]);

    useEffect(() => {
        axios.get("https://swapi.co/api/people/")
        .then(response => {
            setStarData(response.data.results);
            console.log(response.data.results);
        })


            .catch (error => console.log(error));

            }, []);


    

    return (
        <Wrap >
            {starData.map (star => {
            return <StarCard
                names={star.name}
                height= {star.height}
                genders = {star.gender}
                birthYear = {star.birth_year}
            />
               })}
        </Wrap>
    );
}