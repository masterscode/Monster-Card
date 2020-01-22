import React from 'react';
import './card.css';

const Card = (props) => (
    <div className = 'card-container'>
        <img alt = 'monster' src ={`https://robohash.org/${props.monster.id}?set=set2&size=180x180 `}  />
     <h3> {props.monster.name}</h3>
     <p align = 'center'>{props.monster.email}</p>
   </div>
)


export default Card;
