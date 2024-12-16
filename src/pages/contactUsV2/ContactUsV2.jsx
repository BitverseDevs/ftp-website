import SectionTitle from 'components/sectionTitle/sectionTitle';
import { contactUsCTA } from 'data/sitehome';
import { useState } from 'react';
import ContactUs from 'pages/contactus/contactus';
import { Modal } from '@mui/material';
import './contactUsV2.scss';

const ContactUsV2 = ({ contactV2Info }) => {
  const [showModal, setShowModal] = useState(false);
  const { title, ctaContent } = contactV2Info;

  const modalClick = () => setShowModal(!showModal);

  return (
    <div id='contactUsV2-outer-container'>
       <ContactUs 
        open={showModal}
        onClose={modalClick}
      />
      <div id="contactUsV2-inner-container">
        <div id="contactUsV2-title">{title}</div>
        <div id='contactUsV2-CTA'onClick={modalClick}>{ctaContent}</div>
      </div>
    </div>
  )

}

export default ContactUsV2;