import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './contactus.scss'
// import ParticleBg from 'pages/ui/particlebg';
import { contactPageData, contactPageBanner, contactPageFormList } from 'data/contactpage';
// import ProductSpecs from 'pages/sitehome/productspecs/productspecs';
import ContactInput from './contactinput/contactinput';
import ButtonStyleV1 from 'pages/ui/buttonstyles/buttonstylev1/buttonstylev1';
import ReCAPTCHA from 'react-google-recaptcha';
import ParticleBg from 'pages/ui/particlebg';
// import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Modal, Button } from '@mui/material';
import { currentStats } from 'data/sitehome';
import SEO from '../../components/seo/seo';
import emailjs from '@emailjs/browser';
import ScrollAnimation from 'react-animate-on-scroll';

export function ContactUs({ open, onClose }) {

    const [formValues, setFormValues] = useState({
        from: "website@bitverseph.com",
        to: "sales01@bitverseph.com",
        subject: "Demo Request",
        fullName: '',
        email: '',
        companyName: '',
        contactNumber: '',
        numberOfEmployees: '',
        datePreferences: '',
        timePreferences: '',
        remarks: '',
        recaptchaResponse: '',
    });

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        console.log('handling changeeeee');
        setFormValues((prevState) => ({ 
            ...prevState, 
            [name]: value 
        }));

    };

    const handleClose = () => {
        onClose();
        setFormValues((prevState) => ({
            ...prevState,

            fullName: '',
            email: '',
            contactNumber: '',
            companyName: '',
            numberOfEmployees: '',
            datePreferences: '',
            timePreferences: '',
            remarks: '',
        }));
    }
    
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send('service_6ybivda', 'template_ixowxar', formValues, 'wJDHZPr9N4cJdGevV');
            alert('Email sent successfully');
            setFormValues(curr => ({ 
                fullName: '',
                email: '',
                contactNumber: '',
                companyName: '',
                numberOfEmployees: '',
                datePreferences: '',
                timePreferences: '',
                remarks: '',
                /* test API_KEY = 're_oawxABua_NL3ffjCCVMTWTrqMytGKLgsA'*/
            }));
        } catch (error) {
            console.error(error);
            alert('Error sending email');
        } finally {
            console.log('Contact us form submitted')
        }
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className='modalDemo'
        >
            <>
                <SEO title='Contact Us - Bitverse Corporation'
                    description='Contact us for a demo of our products and services. We are here to help you streamline your processes and improve overall efficiency.'
                    keyword='Bitverse, bitverse, Bitverse Corportion, bitverse corporation, bitverse it, Bitverse it, Bitverse IT Solutions, Bitverse Contact Us, Bitverse Corporation Contact Us, Bitverse Contact Us Form, Bitverse Demo, Bitverse Book Demo'
                    type='website'
                    name='Bitverse Corporation'/>
                <section className='contact-us--section-about'>
                    <img id='closeIcon' onClick={onClose} src="/assets/x-sign.svg" alt="x" />
                    <div className='contact-us--main-section'>
                        <div className='contact-us--main-header'>
                            {contactPageData.map(({key, title, isMainAbout, picUrl, desc}) => (
                                isMainAbout === true ? 
                                    <div className='contact-us--main-header-title'>
                                        <h1 className='contact-us--main-header-header'>
                                            {title}
                                        </h1>
                                        <img id='waving-hand' src={picUrl} alt="waving hand" />
                                    </div>
                                : ''
                            ))}
                        </div>
                        <form className='contact-us--form' onSubmit={handleSubmit}>
                            <div className='contact-us--input-label-wrap'>
                                {contactPageFormList.map((item) => (
                                    <ContactInput 
                                        label={item.label}
                                        labelFor={item.labelFor}
                                        type={item.type}
                                        onChange={handleChange}
                                        value={formValues[`${item.formValues}`]}
                                        required={item.required}
                                        formValuesSetter={setFormValues}
                                    />
                                ))}
                            </div>
                            <input id='submitForm' type="submit" value='Submit'/>
                        </form>
                    </div>
                    <div id="contact-us--footer-outer-section">
                        <div id="contact-us-footer-inner-section">
                            {currentStats.map(({id, title, number}, index) => (
                                <div className="contact-us-stats-container" key={index}>
                                    <div className="contact-us-stats-number">
                                        {number}
                                    </div>
                                    <div className={id === 'stat1' ? 'contact-us-stats-header' : "contact-us-stats-title"}>
                                        {title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        </Modal>
    );
}

export default ContactUs;