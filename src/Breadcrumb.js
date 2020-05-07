
import React from 'react';
import './Breadcrumb.css';

function Breadcrumb({ values }) {
    console.log(values);
    return (
        <ul className="breadcrumb">
            {values.map(value => <li key={value.name}><a href={value.link}>{value.name}</a></li>)}
        </ul>
    );
}

export default Breadcrumb;