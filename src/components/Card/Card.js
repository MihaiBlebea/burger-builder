import React from 'react';
import './Card.css';
import { Title } from '../exports.js';

function Card(props)
{
    return (
        <div className="card mb-4 Card">
            <div className="card-body">
                <Title type='small'>{props.date}</Title>
                <h6 className="card-subtitle mb-2 text-muted">Order details:</h6>
                <p className="card-text" style={{margin:0}}>
                    <span>Name: {props.details.name}</span> | <span>Phone: {props.details.phone}</span> | <span>Email: {props.details.email}</span>
                </p>
                <p className="card-text" style={{margin:0}}>
                    <span>Address: {props.details.address}</span> | <span>Price: {props.details.price}£</span>
                </p>
            </div>
        </div>
    );
}

export default Card;
