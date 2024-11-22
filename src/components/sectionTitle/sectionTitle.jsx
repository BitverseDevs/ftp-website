import React from "react";
import "./sectionTitle.scss";

export function SectionTitle(props) {
    const { 
        fromWhere,
        featMsg, 
        title, 
        desc, 
        buttonTwo,
        marginBottom 
    } = props;
    return (
        <React.Fragment>
            <section style={{marginBottom: `${marginBottom}px`}} className='section-title-container'>
                {fromWhere == 'contactUsCTA' ?  
                    <>
                        <h1 className='section-title-title'>{title}</h1>
                        <div id="sectionTitleContainer">
                            <div className='section-title-button'>{buttonTwo}</div>
                        </div>
                    </>
                : 
                    <>
                        <p className='section-title-feat'>{featMsg}</p>
                        <h1 className='section-title-title'>{title}</h1>
                        <div id="sectionTitleContainer">
                            {/* <div className='section-title-desc'>{desc}</div> */}
                        </div>
                    </>
                }
                
            </section>
        </React.Fragment>
    );
}

export default SectionTitle;