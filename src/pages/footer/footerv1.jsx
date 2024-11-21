import React from 'react';
// import { footerList, footerBg } from '@/data';
import Input from './footerinput/input';
import './footerv1.scss';

export function FooterV1(props) {
    //To do: Doesn't  take null value; 'need mock data fallback';
    const footerList = Object?.values(props?.footerList);
    const footerBg = props?.footerBg?.bgsrc;
    // console.log(footerBg, 'meow11')
    const footerBgStyle = {
        background: `url(${footerBg})`,
        backgroundSize: 'cover',
    };
    // console.log(footerBg, 'meow')
    return (
        <React.Fragment>
            <section className='footer-section--bg-overlay'>
                <section className={'footer-section--wrap'}>
                    {footerList.map(({title, items, desc}, index) => (
                        <div className="footer-section--item-container">
                            <div className="footer-section--item-header">
                                {desc}
                            </div>
                            <div className={index == 0 ? 'footer-section--item-body-outerCtn' : 'footer-section--item-body-outerCtnn .footer-section--item-body-outerCtn'}>
                                {items.map(({name, iconName, desc}, index) => (
                                    <div className="footer-section--item-body">
                                        <div className='footer-section--item-body-one'>
                                            <img className='footer-section-img' src={iconName} alt="Footer image" />
                                        </div>
                                        <div className="footer-section--item-body-two">
                                            {desc}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </React.Fragment>
    );
}

export default FooterV1;