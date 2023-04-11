import React from 'react';
import { 
    brandArea, 
    productSpecificationTitle,
    productSpecificationList,
    callToActionTitle,
    // footerList,
    // upperNavData
 } from 'data/sitehome';
// import { footerBg } from 'data/uiData';
// import Uppernav from './uppernav/uppernav';
import Sitehero from './sitehero/sitehero';
// import StaticNavMsg from './static-nav-msg/staticnavmsg';
import BrandArea from './brandarea/brandarea';
import FeaturedSpecs from './featuredspecs/featuredSpecs';
import ProductCarousel from './productcarousel/productcarousel';
import ServiceOfferings from './serviceofferings/serviceofferings';
import ProductSpecs from './productspecs/productspecs';
import CallToAction from './calltoaction/calltoaction';
import ParticleBg from '../ui/particlebg';
import useScrollToRef from 'custom-hooks/use-scroll-to-ref/use-scroll-to-ref';
import './main.scss';


export function Main(props) {
    const { scrollRefs } = props;
    // const [section1Ref, scrollToSection1] = useScrollToRef();
    return (
        <React.Fragment>
            <ParticleBg/>
            <section className='main-site-home--page-wrap'>
                <Sitehero/>
                    <BrandArea brands={brandArea}/>
                    <FeaturedSpecs/>
                    <ProductCarousel/>
                    <ServiceOfferings/>
                    <ProductSpecs ref={scrollRefs} productsTitle={productSpecificationTitle} productsList={productSpecificationList}/>
                <CallToAction data={callToActionTitle}/>
            </section>
        </React.Fragment>
    );
}


export default Main;