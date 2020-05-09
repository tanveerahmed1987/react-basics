import React from 'react';
import './Button.css';

function Button({ type, children, onClick }) {
    return (
        <button className={`btn ${type}`} onClick={() => onClick(children)}>
            {children}
        </button>
    );
}

export default Button;
