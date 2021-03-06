import React from 'react';
import './homepage.style.scss';

const HomePage = () => (
    <div className='homepage'>

        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>PUZZLE MODEL 1</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>

        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>PUZZLE MODEL 2</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>


        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>PUZZLE MODEL 3</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>

    </div>
)

export default HomePage;