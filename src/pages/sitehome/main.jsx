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
import FAQ from './faq/FAQ';
import SEO from '../../components/seo/seo';
import ContactUsV2 from 'pages/contactUsV2/ContactUsV2';
import Highlights from 'pages/highlights/Highlights';
import './main.scss';

const Main = (props) => {
    const { scrollRefs } = props;
    // const [section1Ref, scrollToSection1] = useScrollToRef();
    return (
        <React.Fragment>
            <SEO title="Bitverse Corporation - IT Solutions" description="Bitverse Corporation is a tech company offering a range of innovative software solutions for businesses." name="Bitverse Corporation" type="website" keyword="Bitverse, bitverse, bitverseph, bitverse it, IT Solutions, Software Development, Web Development, Mobile Development, Digital Marketing, SEO, SMM, SEM, SMO, Web Designing, Mobile App Development, E-commerce Development, CMS Development, CRM Development, ERP Development, Custom Software Development, Web Application Development, Mobile Application Development, SEO Services, SMM Services, SEM Services, SMO Services, CMS Development Services, CRM Development Services, ERP Development Services, Custom Software Development Services, HRIS, Human Resource Information System, Bitverse Website"/>
            {/* <ParticleBg/> */}
            <section className='main-site-home--page-wrap'>
                <Sitehero/>
                    <Highlights />
                    <FeaturedSpecs/>
                    <ProductCarousel/>
                    <ServiceOfferings fromWhere='home'/>
                    <ContactUsV2 />
                    <BrandArea brands={brandArea}/>
                    <FAQ />
                    {/* <ProductSpecs fromWhere='home' ref={scrollRefs} productsTitle={productSpecificationTitle} productsList={productSpecificationList}/> */}
                {/* <CallToAction data={callToActionTitle}/> */}
            </section>
        </React.Fragment>
    );
}


export default Main;