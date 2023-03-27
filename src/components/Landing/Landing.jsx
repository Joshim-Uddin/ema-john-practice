import React from 'react';
import Button from '../Button/Button';
import './Landing.css'
import Image from '../../images/photo.jpg'

const Landing = () => {
    return (
        <div className='showcase'>
            <div className='showcase-left'>
            <small>Sale up to 70% off</small>
            <h1>New Collection For Fall</h1>
            <p>Discover all the new arrivals of ready-to-wear collection.</p>
            <Button />
            </div>
            
            <img src={Image} alt="" />
            
        </div>
    );
};

export default Landing;