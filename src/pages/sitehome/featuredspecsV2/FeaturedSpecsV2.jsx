import { sectionTitles } from 'data/sitehome';
import ScrollAnimation from 'react-animate-on-scroll';
import './featuredspecsV2.scss';

const FeaturedSpecsV2 = () => {

  return (
    <div id="featuredspecsV2-outer-container">
      <div id="featuredspecsV2-inner-container">
        <div id="featuredspecsV2-container-one">
          <div id="featuredspecsV2-left-sectionn">
            <div id="featuredspecsV2-bubble-one"></div>

            <div id="featuredspecsV2-left-section">
              <div id="featuredspecs-featmsg">Human Resource Information System</div>
              <div id="featuredspecs-title">These are just the few reasons why we need HRIS</div>
            </div>
          </div> 
          
          <div id="featuredspecsV2-right-section"> 
            {sectionTitles[2].desc.map((element, index) => (
              <ScrollAnimation duration={1.2} animateOnce={true} animateIn='slideInUp'>
                <div className="featuredspecsV2-item">
                  {element}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>

        <ScrollAnimation className='featuredspecsV2-container-two-outer' duration={1.2} animateOnce={true} animateIn='slideInUp'>
          <div id="featuredspecsV2-bubble-two"></div>

          <div id="featuredspecsV2-container-two">
            <div id="featuredspecsV2-left-sectionn">
              <div id="featuredspecsV2-titlee">Now. Why Bitverse HRIS?</div>
            </div>

            <div id="featuredspecsV2-right-sectionn">
              {sectionTitles[3].desc.map(({ iconName, title, desc }, index) => (
                  <div className="featuredspecsV2-itemm-container">
                    <div className="featuredspecsV2-itemm-icon-container">
                      <img className='featuredspecsV2-itemm-icon' src={iconName} alt="FeaturedV2 Image" />
                    </div>
                    <div className="featuredspecsV2-itemm-title">{title}</div>
                    <div className="featuredspecsV2-itemm-desc">{desc}</div>
                  </div>
              ))} 
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )  
}

export default FeaturedSpecsV2;