import React from 'react';
import '../NavigationBar/Navigation.css';

const Navigation = () => {
    return (
        <ul>
            <li>
                <a className="active" href="#home"></a>
            </li>
            <li>
                <a href="#news">Add Person</a>
            </li>
            <li>
                <a href="#contact">List Person</a>
            </li>
        </ul>
    )
}

export default Navigation;
