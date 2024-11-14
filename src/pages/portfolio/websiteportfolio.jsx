import React, { useEffect, useRef } from 'react';
import './websiteportfolio.scss';
// import { websitePortfolioTitle } from '../../../data/sitehome';
import { responsivePortfolio, websitePortfolioTitle } from 'data/sitehome';
import SectionTitle from 'components/sectionTitle/sectionTitle';
import ParticleBg from 'pages/ui/particlebg';
import SEO from '../../components/seo/seo';
import AliceCarousel from 'react-alice-carousel';

export function WebsitePortfolio(props) {
    let portfolioArray = Object.values(props.portfolios);
    const {title, desc} = websitePortfolioTitle;
    const slides = useRef(null);
    const handleDragStart = (e) => e.preventDefault();

    return (
        <React.Fragment>
            <SEO title='Website Portfolio - Bitverse Corporation' 
                description='Our products have helped businesses and local government units streamline their processes and improve overall efficiency.'
                keyword='Bitverse, bitverse, Bitverse Corportion, bitverse corporation, bitverse it, Bitverse it, Bitverse IT Solutions, Bitverse Website Portfolio, Bitverse Products, Bitverse Corporation Products'
                type='website'
                name='Bitverse Corporation'/>
            <ParticleBg/>
            <section className='website-portfolio--section-wrap'>
                <SectionTitle title={title} desc={desc}/>
                <ul className='website-portfolio--figure-section'>
                    {/* <AliceCarousel 
                        infinite
                        autoPlay
                        autoPlayInterval={4500}
                        animationDuration={1000}
                        disableButtonsControls
                        disableDotsControls
                        items={portfolioArray}
                        mouseTracking
                        responsive={responsivePortfolio}
                        ref={slides}
                    /> */
                        portfolioArray.map(({ id, src, alt, srcLink }) => (
                            <li className='website-portfolio--figure-wraps' key={id} onDragStart={handleDragStart} role='presentation'>
                                <div className='website-portfolio--figure-desc'>
                                <p className='website-portfolio--figure-title'>{alt}</p>
                                    <button className='website-portfolio--figure-button'>
                                        <a href={srcLink} target={'_blank'}>
                                            {'Visit Website'}
                                        </a>
                                    </button>
                                </div>
                                <img className='website-portfolio--figure-items' src={src} alt={alt}></img>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </React.Fragment>
    );
}

export default WebsitePortfolio;