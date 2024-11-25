import React, { useEffect, useRef } from 'react';
import './websiteportfolio.scss';
// import { websitePortfolioTitle } from '../../../data/sitehome';
import { responsivePortfolio, websitePortfolioTitle } from 'data/sitehome';
import SectionTitle from 'components/sectionTitle/sectionTitle';
import ParticleBg from 'pages/ui/particlebg';
import SEO from '../../components/seo/seo';
import AliceCarousel from 'react-alice-carousel';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export function WebsitePortfolio(props) {
    let portfolioArray = Object.values(props.portfolios);
    const {title, desc} = websitePortfolioTitle;

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        }
    };

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
                    <Carousel 
                        responsive={responsive} 
                        autoPlay={true}
                        infinite={true}
                        containerClass="carousel-container"
                        centerMode='true'
                        arrows={false}
                        itemClass="item-class"
                    >
                        {portfolioArray.map(({ id, src, alt, srcLink }, index) => (
                            <li className='website-portfolio--figure-wraps' key={id}>
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
                        ))}
                    </Carousel>
                </ul>
            </section>
        </React.Fragment>
    );
}

export default WebsitePortfolio;