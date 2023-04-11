import React from 'react';
import './websiteportfolio.scss';
// import { websitePortfolioTitle } from '../../../data/sitehome';
import { websitePortfolioTitle } from 'data/sitehome';
import SectionTitle from 'components/sectionTitle/sectionTitle';
import ParticleBg from 'pages/ui/particlebg';

export function WebsitePortfolio(props) {
    const portfolioArray = Object.values(props.portfolios);
    const {title, desc} = websitePortfolioTitle;
    return (
        <React.Fragment>
            <ParticleBg/>
            <section className='website-portfolio--section-wrap'>
                <SectionTitle title={title} desc={desc}/>
                <ul className='website-portfolio--figure-section'>
                    {portfolioArray.map(({id, src, alt, srcLink})=>{
                        return (
                            <li className='website-portfolio--figure-wraps' key={id}>
                                <div className='website-portfolio--figure-desc'>
                                    <p className='website-portfolio--figure-title'>{alt}</p>
                                    <button className='website-portfolio--figure-button'>
                                        <a href={srcLink} target={'_blank'}>
                                        {'Visit Website'}
                                        </a>
                                    </button>
                                </div>
                                <img className='website-portfolio--figure-items' src={src} alt={alt}>
                                </img>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </React.Fragment>
    );
}

export default WebsitePortfolio;