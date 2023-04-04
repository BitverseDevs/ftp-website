import React from 'react';
import './contactus.scss'
import ParticleBg from 'pages/ui/particlebg';
import { aboutPageData, aboutPageBanner, aboutPillarsTitle, aboutPillarsList } from 'data/contactpage';
import ProductSpecs from 'pages/sitehome/productspecs/productspecs';

export function ContactUs() {
    // console.log(window, 'meow')
    return (
        <React.Fragment>
            <ParticleBg/>
            <section className='contact-us--section-hero'>
                <img src={aboutPageBanner.bannerSrc} alt={'contact-us--banner'}/>
            </section>
            <section className='contact-us--section-about'>
                <div className='contact-us--left-section'>
                    <div className='contact-us--about-logo'>
                        {/* {'b'}<p>it</p>{'verse'}<p className='contact-us-logo--symbol'>{'>>'}</p> */}
                        {'Contact Us'}
                    </div>
                    <div className='contact-us--main-header'>
                        {aboutPageData.map(({key, title, isMainAbout, picUrl, desc})=>{
                            if(isMainAbout === false){
                                return;
                            } else {
                                return (
                                    <React.Fragment>
                                        <div className='contact-us--main-header-title'>
                                            <h1>
                                                {title}
                                            </h1>
                                            <p>
                                                {desc}
                                            </p>
                                        </div>
                                        <img src={picUrl} alt={'about-picture'}>
                                        </img>
                                    </React.Fragment>

                                )
                            }

                        })}
                    </div>
                </div>
                <div className='contact-us--right-section'>
                    <div className='contact-us--right-content'>
                        {aboutPageData.map(({key, title, isMainAbout, picUrl, desc})=>{
                            if(isMainAbout === true){
                                return;
                            } else {
                                return (
                                    <React.Fragment>
                                        <div className='contact-us--right-header-title'>
                                            <h1>
                                                {title}
                                            </h1>
                                            <p>
                                                {desc}
                                            </p>
                                        </div>
                                    </React.Fragment>

                                )
                            }

                        })}
                    </div>
                </div>
            </section>
            <ProductSpecs productsTitle={aboutPillarsTitle} productsList={aboutPillarsList}/>
        </React.Fragment>
        
    );
}

export default ContactUs;