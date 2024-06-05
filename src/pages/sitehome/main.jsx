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
import { Helmet } from 'react-helmet';

export function Main(props) {
    const { scrollRefs } = props;
    // const [section1Ref, scrollToSection1] = useScrollToRef();
    return (
        <React.Fragment>
            <Helmet>
                <title>Bitverse Corporation - IT Solutions</title>
                <meta name="description" content="Bitverse IT Solutions. Bitverse Corporation is a tech company offering a range of innovative software solutions for businesses." />
                <meta name="keywords" content="Bitverse, IT Solutions, Software Development, Web Development, Mobile Development, Digital Marketing, SEO, SMM, SEM, SMO, Web Designing, Mobile App Development, E-commerce Development, CMS Development, CRM Development, ERP Development, Custom Software Development, Web Application Development, Mobile Application Development, SEO Services, SMM Services, SEM Services, SMO Services, CMS Development Services, CRM Development Services, ERP Development Services, Custom Software Development Services, HRIS, Human Resource Information System, Bitverse Website" />
            </Helmet>
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