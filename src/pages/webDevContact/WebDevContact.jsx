import React, {useEffect, useState} from 'react';
import { webDevContactPageFormList, webDevContactItem } from 'data/contactpage';
import { Modal, Button } from '@mui/material';
import SEO from '../../components/seo/seo';
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import './webDevContact.scss';

const WebDevContact = ({ open, onClose }) => {
  const [formValues, setFormValues] = useState({
    subject: "Website Service",
    fullName: '',
    email: '',
    companyName: '',
    contactNumber: '',
    remarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
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
      emailAddress: '',
      contactNumber: '',
      companyName: '',
      remarks: '',
    }));
  }
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          await emailjs.send('service_snkruzb', 'template_a0lam49', formValues, 'KmfIkls146Qc_43jM');
          alert('Email sent successfully');
          setFormValues((prevState) => ({
              ...prevState, 
              fullName: '',
              emailAddress: '',
              contactNumber: '',
              companyName: '',
              remarksQuestion: '',
          }));
      } catch (error) {
          console.error(error);
          alert('Error sending email');
      } finally {
          console.log('Contact us form submitted');
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
                  <div className="contact-us--main-header-title">Ready To Upgrade your Website</div>
                  <div className="contact-us--main-desc">Experience next level of Website.</div>
                </div>

                <div id="contact-us--main-section-one">
                  <div id="contact-us--main-item-container">
                    {webDevContactItem.map(({id, title, desc, iconName}) => (
                      <div key={id} className="contact-us--main-item">
                        <img className='contact-us-icon' src={iconName} alt="Contact Us Icon" />
                        <div className="contact-us-texts">
                          <div className="contact-us-title">{title}</div>
                          <div className="contact-us-desc">{desc}</div>
                        </div>
                      </div>
                    ))}          
                  </div>

                  <form className='contact-us--web-form' onSubmit={handleSubmit}>
                    <div className='contact-us--input-label-wrap'>
                      {webDevContactPageFormList.map(({key, label, labelFor, type, placeholder, value, required}) => (
                        <TextField
                          className='hekhok'
                          name={labelFor}
                          label={label}
                          onChange={(e) => handleChange(e)}
                          type={type}
                          value={formValues[value]}
                          variant='outlined'
                          required={required ? required : false}
                        />
                      ))}
                    </div>
                    <input id='submitForm' type="submit" value='Get in touch'/>
                  </form>
                </div>
              </div>
            </section>
          </>
        </Modal>
    );
}

export default WebDevContact;