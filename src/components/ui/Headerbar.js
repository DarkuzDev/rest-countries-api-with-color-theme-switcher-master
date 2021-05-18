
import React from 'react';

export const Headerbar = () => {

    const handleDarkMode = () => {
        document.querySelector('body').classList.toggle('dark-mode');
    }

    return (
        <div className="headerbar">
            <div className="container headerbar__content">
                <h1>Where in the world?</h1>
                <button className="btn btn-tertiary" onClick={ handleDarkMode }>
                    <i className="far fa-moon"></i>
                    Dark Mode
                </button>
            </div>
        </div>
    )
}
