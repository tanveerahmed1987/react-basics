import React from 'react';
import './Card.css';
import avatar1 from '../../assets/images/img_avatar_1.png';

function Card() {
    return (
        <div className="card">
            <img src={avatar1} alt="Avatar" className="img" />
            <div className="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    )
}

export default Card;
