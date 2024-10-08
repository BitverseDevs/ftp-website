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
            <section className='footer-section--bg-overlay' style={footerBgStyle}>
                <section className={'footer-section--wrap'}> 
                    {footerList.map((item)=>{
                        const {
                            title,
                            isInputType,
                            inputPlaceholder,
                            firstDesc,
                            secondDesc, 
                            isBullettedList,
                            bullettedItems,
                        } = item;
                        if(isInputType === true && isBullettedList === true){
                            return;
                        } else if (isInputType === false && isBullettedList === false){
                            return(
                                <React.Fragment>
                                    <div className={'footer-section--item-container'}>
                                        <h2 className={'footer-section--item-header'}>
                                            {title}
                                        </h2>
                                        <p className={'footer-section--item-first-desc'}>
                                            {firstDesc}
                                        </p>
                                        <p className={'footer-section--item-second-desc'}>
                                            {secondDesc}
                                        </p>
                                    </div>
                                </React.Fragment>
                            );
                        } else if (isInputType === true && isBullettedList === false){
                            return(
                                <React.Fragment>
                                    <div className={'footer-section--item-container'}>
                                        <h2 className={'footer-section--item-header'}>
                                            {title}
                                        </h2>
                                        <p className={'footer-section--item-first-desc'}>
                                            {firstDesc}
                                        </p>
                                        <div className={'footer-section--item-second-desc'}>
                                            {secondDesc}
                                            <Input placeholder={inputPlaceholder}/>
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        } else if (isInputType === false && isBullettedList === true){
                            return(
                                <React.Fragment>
                                    <div className={'footer-section--item-container'}>
                                        <h2 className={'footer-section--item-header'}>
                                            {title}
                                        </h2>
                                        <ul className={'footer-section--unordered-list'}>
                                            {bullettedItems.map((item)=> {
                                                return (
                                                <li className={'footer-section--list-item'}>
                                                    {item}
                                                </li>
                                                )
                                                
                                            })}
                                        </ul>
                                    </div>
                                </React.Fragment>
                            );
                        }
                    })}

                    <div className={'footer-section--container'}>

                    </div>
                </section>
            </section>
        </React.Fragment>
    );
}

export default FooterV1;