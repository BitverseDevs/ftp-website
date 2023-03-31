import React from 'react';
import './about.scss'
import ParticleBg from 'pages/ui/particlebg';
import { aboutPageData, aboutPageBanner, aboutPillarsTitle, aboutPillarsList } from 'data/aboutpage';
import ProductSpecs from 'pages/sitehome/productspecs/productspecs';

export function About() {
    return (
        <React.Fragment>
            <ParticleBg/>
            <section className='about-page--section-hero'>
                <img src={aboutPageBanner.bannerSrc} alt={'about-page--banner'}/>
            </section>
            <section className='about-page--section-about'>
                <div className='about-page--left-section'>
                    <div className='about-page--about-logo'>
                        {'b'}<p>it</p>{'verse'}<p className='about-page-logo--symbol'>{'>>'}</p>
                    </div>
                    <div className='about-page--main-header'>
                        {aboutPageData.map(({key, title, isMainAbout, picUrl, desc})=>{
                            if(isMainAbout === false){
                                return;
                            } else {
                                return (
                                    <React.Fragment>
                                        <div className='about-page--main-header-title'>
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
                <div className='about-page--right-section'>
                    <div className='about-page--right-content'>
                        {aboutPageData.map(({key, title, isMainAbout, picUrl, desc})=>{
                            if(isMainAbout === true){
                                return;
                            } else {
                                return (
                                    <React.Fragment>
                                        <div className='about-page--right-header-title'>
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

export default About;