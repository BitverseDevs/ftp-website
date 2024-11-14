import React from 'react';
import './featureslist.scss';

function FeaturesList(props) {
    const versionActive = props?.versionName;
    const featuresArray = Object.values(props?.products);
    const fromWhere = props.fromWhere;

    return (
        <section className={fromWhere === 'home' || fromWhere === 'about' ? 'features-list--section-wrap' : 'features-list--content-wrap-UpperNav'}>
            <ul className='features-list--list-ul'>
                {featuresArray.map(({id, productName, productDesc, srcLink, iconName})=> (
                        <li className='features-list--list-li' key={id}>
                            <h6 className='features-list--h6-wrap'>
                                <a href={srcLink} className='features-list--content-wrap'>
                                    <span className='features-list--icon-wrap'>
                                        <span className='features-list--svg-wrap'>
                                            <img className='features-list--data-svg' src={iconName} alt="img" />
                                        </span>
                                        <h5 className='features-list--svg-title'>{productName}</h5>
                                    </span>
                                    <span className='features-list--svg-content'>
                                        {fromWhere === 'about' ? 
                                            <p className='features-list--svg-desc' href={srcLink}>
                                                {productDesc}
                                            </p>
                                        : ''}
                                    </span>
                                </a>
                            </h6>
                        </li>
                ))}
            </ul>
        </section>
    );
}

export default  FeaturesList;