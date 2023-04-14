import React, {useState} from 'react';
import axios from 'axios';
import './contactus.scss'
// import ParticleBg from 'pages/ui/particlebg';
import { contactPageData, contactPageBanner, contactPageFormList } from 'data/contactpage';
// import ProductSpecs from 'pages/sitehome/productspecs/productspecs';
import ContactInput from './contactinput/contactinput';
import ButtonStyleV1 from 'pages/ui/buttonstyles/buttonstylev1/buttonstylev1';
import ReCAPTCHA from 'react-google-recaptcha';
import { GoogleReCaptchaProvider, GoogleReCaptcha } from 'react-google-recaptcha-v3';



export function ContactUs() {
    // console.log(window, 'meow')
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
        setFormValues({ ...formValues, [name]: value });
    };

    const handleRecaptchaChange = (value) => {
        setFormValues({ ...formValues, recaptchaResponse: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://bitverse-api.herokuapp.com/send-email', formValues);
            console.log(response.data);
            alert('Email sent successfully');
            setFormValues({
                fullName: '',
                email: '',
                contactNumber: '',
                companyName: '',
                numberOfEmployees: '',
                datePreferences: '',
                timePreferences: '',
            });
        } catch (error) {
            console.error(error);
            alert('Error sending email');
        }
    };
    // console.log(contactPageFormList.map((item)=>{`${item.label}`}), "meow")
    return (
        <React.Fragment>
            <GoogleReCaptchaProvider reCaptchaKey="6LdCPoMlAAAAANjuIe2ZT9c5PEYKwrePDJn-8thS">
                <section className='contact-us--section-hero'>
                    <img src={contactPageBanner.bannerSrc} alt={'contact-us--banner'}/>
                </section>
                <section className='contact-us--section-about'>
                    <div className='contact-us--left-section'>
                        {/* <div className='contact-us--about-logo'>
                            {'b'}<p>it</p>{'verse'}<p className='contact-us-logo--symbol'>{'>>'}</p>
                        </div> */}
                        <div className='contact-us--main-header'>
                            {contactPageData.map(({key, title, isMainAbout, picUrl, desc})=>{
                                if(isMainAbout === false){
                                    return;
                                } else {
                                    return (
                                        <React.Fragment>
                                            <div className='contact-us--main-header-title'>
                                                <h1 className='contact-us--main-header-header'>
                                                    {title}
                                                </h1>
                                                <p className='contact-us--main-header-desc'>
                                                    {desc}
                                                </p>
                                            </div>
                                            <img src={picUrl} alt={'about-picture'}>
                                            </img>
                                        </React.Fragment>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className='contact-us--right-section'>
                        <form onSubmit={handleSubmit} className='contact-us--form'>
                            {contactPageFormList.map((item)=>{
                                return(
                                    <div className='contact-us--input-label-wrap'>
                                    <ContactInput 
                                        label={item.label}
                                        labelFor={item.labelFor}
                                        type={item.type}
                                        onChange={handleChange}
                                        placeholder={item.placeholder}
                                        value={formValues[`${item.formValues}`]}
                                        required={item.required}
                                        pattern={item.pattern}
                                    />
                                </div>
                                )
                            })}
                            {/* <ReCAPTCHA
                            sitekey="6LdCPoMlAAAAANjuIe2ZT9c5PEYKwrePDJn-8thS"
                            onChange={handleRecaptchaChange}
                            /> */}
                            <GoogleReCaptcha
                            action="contact_us_form"
                            onVerify={handleRecaptchaChange}
                            />
                            <ButtonStyleV1 type={'submit'} label={'Submit'}/>
                        </form>
                    </div>
                </section>
            </GoogleReCaptchaProvider>
        </React.Fragment>
        
    );
}

export default ContactUs;