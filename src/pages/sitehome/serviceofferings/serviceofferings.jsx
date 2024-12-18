import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import './serviceofferings.scss';
import 'react-alice-carousel/lib/alice-carousel.css';
import { serviceOfferingsHome } from '../../../data/sitehome';
import SectionTitleV2 from 'components/sectiontitleV2/sectiontitlev2';
import SectionTitle from 'components/sectionTitle/sectionTitle';
import { sectionTitles } from '../../../data/sitehome';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

export const ServiceOfferings = ({ fromWhere }) => {
    const [animate, setAnimate] = useState(true);
    const { featMsg: featMsg4, title: title4, } = sectionTitles[4];

    const handleScroll = () => {
        setAnimate(true);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);


    return (
        <React.Fragment>
            <div className={fromWhere === 'home' ? 'service-offerings--background service-offerings--backgroundImg' : 'service-offerings--background'}>
                <section className='service-offerings--section'>
                    <SectionTitle featMsg={featMsg4} title={title4} marginBottom={'0'}/>

                    <section className='service-offerings--main-container' draggable='false'>
                        <section className='service-offerings--main-container-inner'>
                        {serviceOfferingsHome.map((product)=> (
                            <ScrollAnimation className='service-offerings--container-caption' duration={1.5} animateOnce={true} animateIn='slideInUp'>
                                <SectionTitleV2 fromWhere='serviceOfferings' featMsg={product.sectionTitle.featMsg} title={product.sectionTitle.title} desc={product.sectionTitle.desc}/>
                                <Link to={product.srcLink}>
                                    <button className='hero-left-content-action-item-call'>
                                        <a href={product.srcLink}>
                                            {product.srcTitle}
                                        </a>
                                    </button>
                                </Link>
                            </ScrollAnimation>
                        ))}
                        </section>
                        <ScrollAnimation className='service-offerings--container-img' duration={5} animateOnce={false} animateIn={animate ? 'swing' : ''}>
                            {/* <figure className='service-offerings--container-img' data-value="2"> */}
                                <img src='/assets/toool.png' draggable='false'></img>
                            {/* </figure> */}
                        </ScrollAnimation>
                    </section>

                </section>
            </div>
        </React.Fragment>
    )
};


export default ServiceOfferings;
