import React from "react";
import "./sectiontitlev2.scss";
import "animate.css/animate.compat.css";
import ScrollAnimation from "react-animate-on-scroll";

export function SectionTitleV2(props) {
    const { 
        featMsg, 
        title, 
        desc, 
        marginBottom,
        isDescUnorderedListed,
        fromWhere,
    } = props;
    return (
        <React.Fragment>
            <section style={{marginBottom: `${marginBottom}px`}} className={fromWhere == 'productCarousel' || fromWhere == 'serviceOfferings' ? 'section-title-v2-container-styleTwo' : 'section-title-v2-container'}>
                {fromWhere == 'productCarousel' ? 
                    <p className='section-title-v2-feat'>{featMsg}</p>
                : ''}
                
                <h1 className={isDescUnorderedListed !== true ? 'section-title-v2-title' : 'section-title-v2-title-style-two'}>{title}</h1>

                {isDescUnorderedListed === true && Array.isArray(desc) ? 
                    <>
                        {fromWhere === 'featuredSpecsOne' ?
                            <div className='section-title-v2-desc-listed'>
                                {desc.map((item, index) => (
                                    <ScrollAnimation animateIn="slideInUp" animateOnce={true} duration={0.5}>
                                        <div className='section-title-v2-desc-listed-items' key={`${index}_li`}>
                                            {item}
                                        </div>    
                                    </ScrollAnimation>
                                ))}
                            </div>
                        : 
                            <div className="section-title-v2-desc-listed-styleTwo">
                                {desc.map(({ iconName, title, desc }, index) => (
                                    <ScrollAnimation animateIn="slideInUp" animateOnce={true} duration={0.5}>
                                        <div className="section-title-v2-desc-listed-items-styleTwo">
                                            <img src={iconName} alt="Image" />
                                            <h1>{title}</h1>
                                            <p>{desc}</p>
                                        </div>
                                    </ScrollAnimation>
                                ))}                  
                            </div>
                        }
                    </>
                : 
                    <p className='section-title-v2-desc'>
                        {desc}
                    </p>
                }
            </section>
        </React.Fragment>
    );
}

export default SectionTitleV2;