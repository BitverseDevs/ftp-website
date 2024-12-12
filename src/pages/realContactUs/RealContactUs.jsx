import FAQ from 'pages/sitehome/faq/FAQ';
import { realContactUsInfo, contactFormInfo } from 'data/contactpage';
import { TextField } from '@mui/material';
import { useState } from 'react';
import './realContactUs.scss';

const RealContactUs = () => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    emailAddress: '',
    companyName: '',
    remarksQuestion: '',
  })

  const handleChange = (e) => {
    let { name, value } = e.target;


    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  console.log(formValues);

  return (
    <div id="contact-us-outer-container">
      <div id="contact-us-inner-container">
        {/* <div id="contact-us-header-section"> */}
          {/* <h1>Contact Us</h1> */}
        {/* </div> */}

        <div id="contact-us-body-section">
          <div id="contact-us-body-section-one">
            {/* <h1>Have a Question?</h1>
            <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui explicabo exercitationem quisquam quos, vitae cupiditate. Lorem ipsum dolor sit amet.
            </h3> */}
          </div>

          <div id="contact-us-body-section-two">

            <form id='contact-us-form'>
              <div id="contact-us-title">
                <h1>Get In Touch With Us</h1>
                <h2>Kindly Fill Up To Contact Expert</h2>
              </div>
              {contactFormInfo.map(({ id, name, label, type, required }) => (
                <TextField
                  className='contact-us-form-item'
                  key={id}
                  name={name}
                  label={label}
                  onChange={handleChange}
                  type={type}
                  value={formValues[name]}
                  variant='outlined'
                  required={required ? required : false}
                />
              ))}
              <div id='contact-us-form-button-outer-container'>
                <input id='contact-us-form-button' type="submit" value='Get a qoute'/>
              </div>
            </form>

            <div id="real-contact-us-info-outer-container">
              {realContactUsInfo.map(({ id, title, featMsgOne, featMsgTwo, iconName }) => (
                <div key={id} className="real-contact-us-info-container">
                  <div className="real-contact-us-info-icon-container">
                    <img className="real-contact-us-info-icon" src={iconName} draggable={false} />
                  </div>

                  <div className="real-contact-us-info-texts">
                    <div className="real-contact-us-info-title">{title}</div>
                    <div className="real-contact-us-info-featMsgOne">{featMsgOne}</div>
                    <div className="real-contact-us-info-featMsgTwo">{featMsgTwo}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="contact-us-body-section-three">
            <img id='real-contact-us-GIS' src="/assets/realContactUs-GIS.svg" alt="Contact Us GIS" draggable={false} />
          </div>
        </div>

        {/* <FAQ /> */}
      </div>
    </div>
  )  
}

export default RealContactUs;