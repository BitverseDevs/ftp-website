import React from 'react';
import './calltoaction.scss';
import { Link } from 'react-router-dom';

export function CallToAction(props) {
    // console.log(props.data, 'meow')
    const {preMsg, proMsg, actionMsg, bgLink} = props?.data; 
    return (
        <section className='call-to-action--section-wrap'>
            <img className='call-to-action--section-bg' src={bgLink}>
            </img>
            <div className='call-to-action--msg-wrap'>
                <h4 className='call-to-action--msg-pre'>
                    {preMsg}
                </h4>
                <p className='call-to-action--msg-pro'>
                    {proMsg}
                </p>
                <Link to={'/contact-us'}>
                    <button className='call-to-action--msg-action'>
                        <a href={'#'} target={'_blank'}>
                        {actionMsg}
                        </a>
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default CallToAction;