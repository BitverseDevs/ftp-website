import { serviceOfferingItems, serviceOfferingTexts, serviceOfferingList, serviceOfferingCTAV2Info } from './serviceOfferingData';
import { Link } from 'react-router-dom';
import ServicesFeatures from 'pages/servicesFeatures/ServicesFeatures';
import ContactUsV2 from 'pages/contactUsV2/ContactUsV2';
import './serviceOffering.scss';

const ServiceOffering = () => {

  return (
    <>
      <div id="serviceOffering-outer-container">
        <div id="serviceOffering-inner-container">
          <div id="section-one">
            <div id="section-header">
              <div id="featMsg">Yes. We have other services</div>
              <div id="title">Our Services</div>
            </div>

            <div id="section-body">
              <div id="floater"></div>
              {serviceOfferingItems.map(({id, title, desc, iconName, ctaText, url}) => (
                <div key={id} className="item-container">
                  <img className='item-icon' src={iconName} alt="Bitverse Website" />
                  <div className="item-title">{title}</div>
                  <div className="item-desc">{desc}</div>
                  <Link to={url}>
                    <div className='item-CTA'>{ctaText}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>       
        </div>
        <ServicesFeatures header={serviceOfferingTexts} list={serviceOfferingList}/>
        <ContactUsV2 contactV2Info={serviceOfferingCTAV2Info}/>
      </div>
    </>
  )
}

export default ServiceOffering;