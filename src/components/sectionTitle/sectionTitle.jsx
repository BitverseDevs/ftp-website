import React from "react";
import { useState } from 'react';
import ContactUs from 'pages/contactus/contactus';
import "./sectionTitle.scss";

export function SectionTitle(props) {
    const [showModal, setShowModal] = useState(false);
    const { fromWhere, featMsg, title, desc, buttonTwo, marginBottom } = props;

    const modalClick = () => setShowModal(!showModal);

    return (
        <React.Fragment>
            <section style={{marginBottom: `${marginBottom}px`}} className='section-title-container'>
                {fromWhere == 'contactUsCTA' ?  
                    <>
                        <ContactUs 
                            open={showModal}
                            onClose={modalClick}
                        />
                        <h1 className='section-title-title'>{title}</h1>
                        <div id="sectionTitleContainer">
                            <div onClick={modalClick} className='section-title-button'>{buttonTwo}</div>
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