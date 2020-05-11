import React, { useState } from 'react';
import './Tab.css';

function Tab({ headers, children }) {
    const [currentTab, setCurrentTab] = useState(headers[0].id);

    const changeTab = (id) => {
        setCurrentTab(id);
    }

    return (
        <div>
            <div className="tab">
                {
                    headers.map(header =>
                        <button
                            key={header.id}
                            className={currentTab === header.id ? 'active' : ''}
                            onClick={() => { changeTab(header.id) }}>

                            {header.name}

                        </button>)
                }
            </div>
            <div>
                {children.map(child => child.key === currentTab ? child : null)}
            </div>
        </div>
    )
}

export default Tab;
