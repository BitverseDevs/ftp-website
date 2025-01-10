import { hrisUser, softwareDevItems, softwareDevCTAV2Info, softwareDevFeatureList, softwareDevTexts } from 'data/services';
import ContactUsV2 from 'pages/contactUsV2/ContactUsV2';
import ServicesFeatures from 'pages/servicesFeatures/ServicesFeatures';
import './softwareDevService.scss';

const SoftwareDevService = () => {

  return (
    <div id="softwaredev-service-outer-container">
      <div id="softwaredev-service-inner-container">
        <div id="softwaredev-header-container">
          <div id="softwaredev-header">
            <div id="header-featMsg">Our Services</div>
            <div id="header-title">Tailored Software Solutions for Your Business Needs</div>
            <div id="header-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea qui accusantium.</div>
          </div>
        </div>

        <div id="softwaredev-outer-bg">
          <div id="floater"></div>
          <div id="softwaredev-inner-bg">
            <div id="section-one">
              <div id="section-one-container-two">
                <div id="section-one-inner-container-two">
                  <img id='item-one' src="/assets/software-dev-img-1.svg" alt="Software Header Image" draggable={false}/>
                  <div id='item-two'>
                    <div id="item-two-number">100+</div>
                    <div id="item-two-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nulla alias dicta.</div>
                  </div>
                  <img id='item-three' src="/assets/software-dev-img-2.svg" alt="Software Header Image" draggable={false}/>
                  <div id='item-four'>
                    <img id='item-four-img' src="/assets/software-dev-img-3.png" alt="Software Header Image" />
                    <div id="item-four-number">100+</div>
                    <div id="item-four-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam nulla alias dicta.</div>
                  </div>
                </div>
              </div>
            </div>

            <div id="section-two">
              <div id="section-two-container-one">
                <div id="section-two-header-container">
                  <div id="section-two-header-title">Explore Our Services to Enhance Your Business</div>
                  <div id="section-two-header-desc">Save time and resources with our personalized and AI-powered recruitment services</div>
                </div>
              </div>
              {/* Uncomment if there's already content for this section */}
              {/* <div id="section-two-container-two">
                {softwareDevItems.map(({id, title, desc, iconName}) => (
                  <div key={id} className="section-two-container-two-item">
                    <img className='softwareDev-item-img' src={iconName} alt="" />
                    <div className="softwareDev-item-title">{title}</div>
                    <div className="softwareDev-item-desc">{desc}</div>                  
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <ServicesFeatures header={softwareDevTexts} list={softwareDevFeatureList} />
      <ContactUsV2 contactV2Info={softwareDevCTAV2Info} />
    </div>
  )
}

export default SoftwareDevService;