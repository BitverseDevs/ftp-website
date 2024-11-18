import React, { forwardRef } from 'react';
import './productspecs.scss';
// import SectionTitle from '../components/sectionTitle/sectionTitle';
import FeaturesList from 'components/featureslist/featureslist';
import SectionTitle from 'components/sectionTitle/sectionTitle';


export function ProductSpecs(props, ref){ 
    const {featMsg, title, desc} = props?.productsTitle;

    return(
        <React.Fragment>
            <section className='product-specs--section' ref={ref}>
                <h2 className='product-specs--h2'>
                    <SectionTitle featMsg={featMsg} title={title} desc={desc}/>
                </h2>
                <summary className='product-specs--summary'>
                    <FeaturesList fromWhere={props.fromWhere} products={props?.productsList}/>
                </summary> 
            </section>
        </React.Fragment>
    )
}


export default forwardRef(ProductSpecs);