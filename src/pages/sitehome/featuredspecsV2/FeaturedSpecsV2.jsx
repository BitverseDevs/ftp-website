import { sectionTitles } from 'data/sitehome';
import ScrollAnimation from 'react-animate-on-scroll';
import './featuredspecsV2.scss';

const FeaturedSpecsV2 = () => {

  return (
    <div id="featuredspecsV2-outer-container">
      <div id="featuredspecsV2-inner-container">
        <div id="featuredspecsV2-container">
          <div id="featuredspecsV2-left-section">
            <div id="featuredspecs-title">These are just the few reasons why we need HRIS</div>
          </div>
          
          <div id="featuredspecsV2-right-sectionn">
            <div id="featuredspecsV2-bubble-one"></div>
            <div id="featuredspecsV2-bubble-two"></div>

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
        </div>
      </div>
    </div>
  )  
}

export default FeaturedSpecsV2;