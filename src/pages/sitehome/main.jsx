import React from 'react';
// import { 
//     brandArea, 
//     productSpecificationTitle, 
//     productSpecificationList, 
//     websitePortfolioList ,
//     callToActionTitle,
//     footerList,
// } from '../../data/sitehome';
import { 
    brandArea, 
    productSpecificationTitle,
    productSpecificationList,
    websitePortfolioList,
    callToActionTitle,
    footerList,
 } from 'data/sitehome';
import { footerBg } from 'data/uiData';
// import { 
//     Uppernav, 
//     Sitehero, 
//     StaticNavMsg, 
//     BrandArea, 
//     FeaturedSpecs, 
//     ProductCarousel, 
//     ServiceOfferings, 
//     ProductSpecs,
//     WebsitePortfolio,
//     CallToAction,
// } from '.';
import Uppernav from './uppernav/uppernav';
import Sitehero from './sitehero/sitehero';
import StaticNavMsg from './static-nav-msg/staticnavmsg';
import BrandArea from './brandarea/brandarea';
import FeaturedSpecs from './featuredspecs/featuredSpecs';
import ProductCarousel from './productcarousel/productcarousel';
import ServiceOfferings from './serviceofferings/serviceofferings';
import ProductSpecs from './productspecs/productspecs';
import WebsitePortfolio from './websiteportfolio/websiteportfolio';
import CallToAction from './calltoaction/calltoaction';
import ParticleBg from '../ui/particlebg';
import FooterV1 from '../footer/footerv1';
import './main.scss';


export function Main() {
    return (
        <React.Fragment>
            <summary className='main-site-home--page-wrap'>
                <StaticNavMsg/>
                <Uppernav/>
                <Sitehero/>
                {/* <> */}
                    <ParticleBg/>
                    <BrandArea brands={brandArea}/>
                    <FeaturedSpecs/>
                    <ProductCarousel/>
                    <ServiceOfferings/>
                    <ProductSpecs productsTitle={productSpecificationTitle} productsList={productSpecificationList}/>
                    <WebsitePortfolio portfolios={websitePortfolioList}/>
                {/* </> */}
                <CallToAction data={callToActionTitle}/>
                <FooterV1 footerList={footerList} footerBg={footerBg}/>
            </summary>
        </React.Fragment>
    );
}


export default Main;