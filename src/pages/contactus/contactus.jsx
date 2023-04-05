import React, {useState} from 'react';
import axios from 'axios';
import './contactus.scss'
import ParticleBg from 'pages/ui/particlebg';
import { aboutPageData, aboutPageBanner, aboutPillarsTitle, aboutPillarsList } from 'data/contactpage';
import ProductSpecs from 'pages/sitehome/productspecs/productspecs';

export function ContactUs() {
    // console.log(window, 'meow')
    const [formValues, setFormValues] = useState({
        from: "website@bitverseph.com",
        to: "dev02@bitverseph.com",
        subject: "Demo Request",
        fullName: '',
        email: '',
        companyName: '',
        contactNumber: '',
        numberOfEmployees: '',
        datePreferences: '',
        timePreferences: '',
    });

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    console.log(formValues, 'meow?')
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
    return (
        <React.Fragment>
            <ParticleBg/>
            <section className='contact-us--section-hero'>
                <img src={aboutPageBanner.bannerSrc} alt={'contact-us--banner'}/>
            </section>
            <section className='contact-us--section-about'>
                <div className='contact-us--left-section'>
                    {/* <div className='contact-us--about-logo'>
                        {'b'}<p>it</p>{'verse'}<p className='contact-us-logo--symbol'>{'>>'}</p>
                    </div> */}
                    <div className='contact-us--main-header'>
                        {aboutPageData.map(({key, title, isMainAbout, picUrl, desc})=>{
                            if(isMainAbout === false){
                                return;
                            } else {
                                return (
                                    <React.Fragment>
                                        <div className='contact-us--main-header-title'>
                                            <h1>
                                                {title}
                                            </h1>
                                            <p>
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
                    {/* <div className='contact-us--right-content'>
                        {aboutPageData.map(({key, title, isMainAbout, picUrl, desc})=>{
                            if(isMainAbout === true){
                                return;
                            } else {
                                return (
                                    <React.Fragment>
                                        <div className='contact-us--right-header-title'>
                                            <h1>
                                                {title}
                                            </h1>
                                            <p>
                                                {desc}
                                            </p>
                                        </div>
                                    </React.Fragment>

                                )
                            }

                        })}
                    </div> */}
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label>Full Name:</label>
                        <input
                            type="text"
                            name="fullName"
                            value={formValues.fullName}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div>
                        <label>Email Address:</label>
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div>
                        <label>Contact Number:</label>
                        <input
                            type="text"
                            name="contactNumber"
                            value={formValues.contactNumber}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div>
                        <label>Company Name:</label>
                        <input
                            type="text"
                            name="companyName"
                            value={formValues.companyName}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div>
                        <label>Number of Employees:</label>
                        <input
                            type="number"
                            name="numberOfEmployees"
                            value={formValues.numberOfEmployees}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div>
                        <label>Preferred Date:</label>
                        <input
                            type="date"
                            name="datePreferences"
                            value={formValues.datePreferences}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <div>
                        <label>Preferred Time:</label>
                        <input
                            type="time"
                            name="timePreferences"
                            value={formValues.timePreferences}
                            onChange={handleChange}
                            required
                        />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
            {/* <ProductSpecs productsTitle={aboutPillarsTitle} productsList={aboutPillarsList}/> */}
        </React.Fragment>
        
    );
}

export default ContactUs;