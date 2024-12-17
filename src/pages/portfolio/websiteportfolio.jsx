import React, { useEffect, useRef } from 'react';
import './websiteportfolio.scss';
// import { websitePortfolioTitle } from '../../../data/sitehome';
import { responsivePortfolio, websitePortfolioTitle } from 'data/sitehome';
import SEO from '../../components/seo/seo';
import FAQ from 'pages/sitehome/faq/FAQ';
import { clientCTAV2Info } from 'data/sitehome';
import ContactUsV2 from 'pages/contactUsV2/ContactUsV2';
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
            <section className='website-portfolio--section-wrap'>
                {/* <SectionTitle title={title} desc={desc}/> */}
                <div id="website-portfolio--header-section">
                    <div id="website-portfolio-featMsg">Trusted by real Clients</div>
                    <div id="website-portfolio-title">Our Most <span>Valuable Clients</span></div>
                    {/* <div id="website-portfolio-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam neque quaerat iure.</div> */}
                </div>   

                <ul className='website-portfolio--figure-section'>
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
                </ul>
            </section>
            <ContactUsV2 contactV2Info={clientCTAV2Info} />
            {/* <FAQ /> */}
        </React.Fragment>
    );
}

export default WebsitePortfolio;