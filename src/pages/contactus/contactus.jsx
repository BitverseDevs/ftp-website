import React, {useState} from 'react';
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
import { Modal } from '@mui/material';

import SEO from '../../components/seo/seo';
import emailjs from '@emailjs/browser';

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
        setFormValues({ 
            ...formValues, 
            [name]: value 
        });
    };

    const handleRecaptchaChange = (value) => {
        setFormValues({ ...formValues, recaptchaResponse: value });
    };

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
            onClose={onClose}
        >
            <>
                <SEO title='Contact Us - Bitverse Corporation'
                    description='Contact us for a demo of our products and services. We are here to help you streamline your processes and improve overall efficiency.'
                    keyword='Bitverse, bitverse, Bitverse Corportion, bitverse corporation, bitverse it, Bitverse it, Bitverse IT Solutions, Bitverse Contact Us, Bitverse Corporation Contact Us, Bitverse Contact Us Form, Bitverse Demo, Bitverse Book Demo'
                    type='website'
                    name='Bitverse Corporation'/>
                <section className='contact-us--section-about'>
                    <div className='contact-us--main-section'>
                        <div className='contact-us--main-header'>
                            {contactPageData.map(({key, title, isMainAbout, picUrl, desc}) => (
                                isMainAbout === true ? 
                                    <div className='contact-us--main-header-title'>
                                        <h1 className='contact-us--main-header-header'>
                                            {title}
                                        </h1>
                                        {/* <p className='contact-us--main-header-desc'>
                                            {desc}
                                        </p> */}
                                    </div>
                                : ''
                            ))}
                        </div>
                        <form className='contact-us--form'>
                            {contactPageFormList.map((item) => (
                                <div className='contact-us--input-label-wrap'>
                                    <ContactInput 
                                        label={item.label}
                                        labelFor={item.labelFor}
                                        type={item.type}
                                        onChange={handleChange}
                                        placeholder={item.placeholder}
                                        value={formValues[`${item.formValues}`]}
                                        required={item.required}
                                        // pattern={item.pattern}
                                    />
                                </div>
                            ))}
                            <ButtonStyleV1 type={'submit'} label={'Book a demo'}/>
                        </form>
                    </div>
                </section>
            </>
            {/* <GoogleReCaptchaProvider reCaptchaKey="6LdCPoMlAAAAANjuIe2ZT9c5PEYKwrePDJn-8thS"> */}
        </Modal>
    );
}

export default ContactUs;