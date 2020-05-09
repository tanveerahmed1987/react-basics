
import React from 'react';
import './Breadcrumb.css';

function Breadcrumb({ values }) {
    console.log(values);
    return (
        <ul className="breadcrumb">
            {values.map((value, index) => <li key={value.name}>
                {index < values.length - 1 ? <a href={value.link}>{value.name}</a> : value.name}
            </li>)}
        </ul>
    );
}

export default Breadcrumb;