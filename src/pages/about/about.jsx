import React from 'react';
import './about.scss'
import ParticleBg from 'pages/ui/particlebg';
import { aboutPageData, aboutPageBanner, aboutPillarsTitle, aboutPillarsList } from 'data/aboutpage';
import ProductSpecs from 'pages/sitehome/productspecs/productspecs';
import SEO from '../../components/seo/seo';

export function About() {
    return (
        <React.Fragment>
            <SEO title='About Us - Bitverse Corporation' 
                description='We are an information system solutions provider with core expertise on corporate automation platforms and software development. Our collective experience creating and delivering robust IT solutions for local and global companies across various industries: Telecommunications, Government, Healthcare, Real Estate, Construction, Transportation, Food Retail, Education, and Logistics' keyword='Bitverse, bitverse, Bitverse Corportion, bitverse corporation, bitverse it, Bitverse it, Bitverse IT Solutions' 
                name='Bitverse Corporation' 
                type='website'/>
            <div className='about-page--wrap'>
                <section className='about-page--section-hero'>
                    <img src={aboutPageBanner.bannerSrc} alt={'about-page--banner'}/>
                </section>
                <section className='about-page--section-about'>
                    <div className='about-page--left-section'>
                        <div className='about-page--about-logo'>
                            <img src="/assets/bitverse-logo.png" alt="bitverse-logo"/>
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
                                            {/* <img src={picUrl} alt={'about-picture'}>
                                            </img> */}
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
                <ProductSpecs fromWhere='about' productsTitle={aboutPillarsTitle} productsList={aboutPillarsList}/>
            </div>
            <ParticleBg/>
        </React.Fragment>
        
    );
}

export default About;