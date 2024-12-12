import { hrisUser, hrisItems, hrisServceCTAV2Info, hrisFeatureList, hrisFeatureTexts } from 'data/services';
import ContactUsV2 from 'pages/contactUsV2/ContactUsV2';
import ServicesFeatures from 'pages/servicesFeatures/ServicesFeatures';
import './hrisService.scss';

const HRISServices = () => {

  return (
    <div id="hris-service-outer-container">
      <div id="hris-service-inner-container">
        <div id="section-one">
          <div id="section-one-container-one">
            <div id="section-one-featMsg">Our Services</div>
            <div id="section-one-title">Explore Our Services to Enhance Your Business</div>
            <div id="section-one-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea qui accusantium.</div>
          </div>
          <div id="section-one-container-two">
            <div id="section-one-inner-container-two">
              <img id='hris-image' src="/assets/hris-img.svg" alt="HRIS" />

              <div id="hris-container">
                <div id="hris-announcement">
                  <img id='hris-announcement-profile' src="/assets/hero-president.svg" alt="Announcement Profile" />
                  <div id="hris-announcement-texts">
                    <div id="hris-announcement-title">Announcement</div>
                    <div id="hris-announcement-desc">Good morning, we have client metting today! Have a great day</div>
                  </div>
                </div>

                <div id="hris-user-container">
                  {hrisUser.map(({id, user_name, user_position, date, event, location}) => (
                    <div key={id} className="hris-user">
                      <div className="hris-user-header-section">
                        <img className='hris-user-profile' src="/assets/user_img.svg" alt="User Profile" />
                        <div className="hris-user-texts">
                          <div className="hris-user-name">{user_name}</div>
                          <div className="hris-user-position">{user_position}</div>
                        </div>
                      </div>

                      <div className="hris-user-body-section">
                        <div className="hris-user-body-item-one">{date}</div>
                        <div className="hris-user-body-item-two">{event}</div>
                        <div className="hris-user-body-item-three">{location}</div>
                      </div>

                      <div className="hris-user-footer-section">
                        <div className='hris-user-button-one'>Approved</div>
                        <div className='hris-user-button-two'>Dissapproved</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="hris-payroll-time-container">
                <div id="hris-timein-container">
                  <div id="hris-timein-header-section">
                    <img id='hris-timein-profile' src="/assets/hris_clock.png" alt="Time-in Profile" />
                    <div id="hris-timein-texts">
                      <div id="hris-timein-date">December 02, 2024</div>
                      <div id="hris-timein-time">8:00 am</div>
                    </div>
                  </div>
                  <div id="hris-timein-buttons">
                      <div id='hris-timein-button-one'>TIME IN</div>
                      <div id='hris-timein-button-two'>TIME OUT</div>
                    </div>
                </div>
                <img id='hris-payroll' src="/assets/payroll_img.svg" alt="HRIS payroll" />
              </div>
            </div>
          </div>
        </div>

        <div id="section-two">
          <div id="section-two-container-one">
            <div id="section-two-header-container">
              <div id="section-two-header-title">Drive By Innovation, Focused On Empowering HR</div>
              <div id="section-two-header-desc">Save time and resources with our personalized and AI-powered recruitment services</div>
            </div>
          </div>
          <div id="section-two-container-two">
            <div id="floater"></div>
            {hrisItems.map(({id, title, desc, iconName}) => (
              <div key={id} className="section-two-container-two-item">
                <img className='hris-item-img' src={iconName} alt="" />
                <div className="hris-item-title">{title}</div>
                <div className="hris-item-desc">{desc}</div>                  
              </div>
            ))}
          </div>
        </div>
        <div id="section-three"></div>
      </div>
      <ServicesFeatures header={hrisFeatureTexts} list={hrisFeatureList} />
      <ContactUsV2 contactV2Info={hrisServceCTAV2Info} />
    </div>
  )
}

export default HRISServices;