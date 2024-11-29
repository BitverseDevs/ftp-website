import React, { useState } from 'react';
import './sitehero.scss';
import { heroData } from '../../../data/sitehome';
import { Link } from 'react-router-dom';


export function Sitehero() {
    const [selectedItem, setSelectedItem] = useState(false); 
    function handleClick() {
        setSelectedItem(!selectedItem);
    }
      
    console.log(window.innerWidth);

    return (
        <React.Fragment>
            <section className='hero-wrap'>
                {/* <div id='blobOne'></div> */}
                <div className='hero-container'>
                    <div className='hero-left-content'>
                        <div className='hero-left-content-wrap'>
                            <div className='hero-left-content-title'>The Platform Where Affordability Meet <span>HR Efficiency</span></div>
                            <div className='hero-left-content-desc'>
                                {heroData.left_desc}
                            </div>
                        </div>
                    </div>
                    <div className='hero-right-content'>
                        <div id="hero-right-img-container">
                            <div id='blobTwo'></div>
                            <img id='hero-img-one' src="/assets/hero-img-one.svg" alt="Hero Image One" draggable={false} />
                            <img id='hero-img-two' src="/assets/hero-img-two.svg" alt="Hero Image Two" draggable={false} />
                            <img id='hero-img-three' src="/assets/hero-img-three.svg" alt="Hero Image Three" draggable={false} />
                            <img id='hero-img-four' src="/assets/hero-img-four.svg" alt="Hero Image Four" draggable={false} />
                            <div id='hero-small-CTA-one' className='hero-small-CTA'>TIME IN</div>
                            <div id='hero-small-CTA-two' className='hero-small-CTA'>TIME OUT</div>
                            <div id='hero-small-CTA-three' className='hero-small-CTA'>FILE LEAVE</div>
                            <div id="hero-president-container">
                                <img id='hero-president-img' src="/assets/hero-president.svg" alt="Present Profile" draggable={false} />
                                <div id="hero-president-title">
                                    <h1>President</h1>
                                    <h2>Good morning, we have client meeting today! Have a greay day</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={selectedItem ? 'overlay_active': ''} onClick={handleClick}>
            </section>
        </React.Fragment>
    );
}


export default Sitehero;