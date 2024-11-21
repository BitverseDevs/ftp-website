import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import './productcarousel.scss';
import 'react-alice-carousel/lib/alice-carousel.css';
import { productCarouselHome } from 'data/sitehome';
// import SectionTitleV2 from '../components/sectiontitleV2/sectiontitlev2';
import SectionTitleV2 from 'components/sectiontitleV2/sectiontitlev2';
// import useWindowDimensions from '@/custom-hooks/use-window-dimension/use-window-dimension';
// import helpers from '@/helpers/helpers';
import useWindowDimensions from 'custom-hooks/use-window-dimension/use-window-dimension';
import helpers from 'helpers/helpers';
import { Link } from 'react-router-dom';
import ButtonStyleV1 from 'pages/ui/buttonstyles/buttonstylev1/buttonstylev1';

export const ProductCarousel = () => {
    const {width} = useWindowDimensions();
    const [isRender, setIsRender] = useState(undefined);
    const breakPoint = helpers.websiteBreakpoints(width);
    const shouldRender = helpers.breakpointRender(breakPoint);
    const customShouldRender = helpers.breakpointRender(breakPoint, {BP_3: true});
    useEffect(()=> {
        setIsRender(customShouldRender);
    }, [breakPoint]);

    const adjPadding = (key) => {
        const paddingProcessor = {
            'BP_1': 0,
            'BP_2': 0,
            'BP_3': 0,
            'default': 0,
        };
        return paddingProcessor[key] ?? paddingProcessor['default'];
    };

    const adjMargin = (key) => {
        const marginProcessor = {
            'BP_1': '0',
            'BP_2': '0',
            'BP_3': '0',
            'default': '30px',
        };
        return marginProcessor[key] ?? marginProcessor['default'];
    };

    const renderDotsItem = (item) => {
        // const label = item.activeIndex + 1;
        const isActive = item.isActive;
        const labelStyle = {
          fontWeight: isActive ? 'bold' : 'normal',
          color: isActive ? 'rgb(81 0 135)' : 'black',
          marginRight: '30px',
          cursor: 'pointer',
          fontSize: '1.2rem', 
          fontFamily: 'Poppins',
          marginTop: `${adjMargin(breakPoint)}`,
        };
        return (
          <div style={labelStyle}>
            {productCarouselHome[item.activeIndex]?.sectionTitle.title}
          </div>
        );
      };

    const productItemsArray = productCarouselHome.map((product)=> { 
        return (
            <section className='product-carousel--main-container' draggable='false' style={{ flexDirection: !shouldRender ? 'column' : ''}}>
                <figcaption className='product-carousel--container-caption'>
                    <SectionTitleV2 fromWhere='productCarousel' featMsg={product.sectionTitle.featMsg} title={product.sectionTitle.title} desc={product.sectionTitle.desc}/>
                    <Link to={'/contact-us'}>
                        <button className='hero-left-content-action-item-call'>
                                {product.srcTitle}
                        </button>
                        {/* <ButtonStyleV1 label={product.srcTitle}/> */}
                    </Link>
                </figcaption>
                { isRender ? 
                    <figure className='product-carousel--container-img' data-value="2" style={{marginRight: '40px', paddingLeft: '5px'}}>
                        <img src={product.img} alt={product.imgAlt} draggable='false'>
                        </img>
                    </figure>
                :
                    null
                }
            </section>
        );
    });

    return (
        <React.Fragment>
            <section className='product-carousel--section'>
                <AliceCarousel
                    infinite
                    animationDuration={800}
                    disableButtonsControls
                    items={productItemsArray}
                    mouseTracking
                    renderDotsItem={renderDotsItem}
                    paddingLeft={adjPadding(breakPoint)}
                />
            </section>
        </React.Fragment>
    )
};


export default ProductCarousel;
