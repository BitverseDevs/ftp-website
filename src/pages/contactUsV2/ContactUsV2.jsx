import { useState } from 'react';
import ContactUs from 'pages/contactus/contactus';
import './contactUsV2.scss';
import WebDevContact from 'pages/webDevContact/WebDevContact';

const ContactUsV2 = ({ contactV2Info, fromWhere }) => {
  const [showModal, setShowModal] = useState(false);
  const { title, ctaContent } = contactV2Info;

  const modalClick = () => setShowModal(!showModal);

  return (
    <div id='contactUsV2-outer-container'>
      {fromWhere == 'webDevService' ? 
          <WebDevContact 
            open={showModal}
            onClose={modalClick}
          />
        : 
          <ContactUs 
            open={showModal}
            onClose={modalClick}
          />
      }
      <div id="contactUsV2-inner-container">
        <div id="contactUsV2-title">{title}</div>
        <div id='contactUsV2-CTA'onClick={modalClick}>{ctaContent}</div>
      </div>
    </div>
  )

}

export default ContactUsV2;