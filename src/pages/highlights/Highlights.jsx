import { highlightsItems } from 'data/sitehome';
import { NavLink } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './highlights.scss';

const Highlights = () => {

  window.addEventListener('scroll', () => {
    console.log(window.scrollY);
  });

  return (
    <div id="highlights-outer-container">
      <div id='city-scapes-bg'>
        <img id='city-scapes-img' src="/assets/city-scapes-bg.svg" alt="city scapes" draggable={false}/>
      </div>

      <div id="highlights-inner-container">
          {highlightsItems.map(({highlight_id, title, featMsg, cta, footerText, imagePath}, index) => (
            <div className={highlight_id === 'highlight-one' ? 'highlights-container' : 'highlights-container highlights-container-style-two'}>

              <ScrollAnimation duration={1.2} animateOnce={true} animateIn='slideInUp'>
                <div className={highlight_id === 'highlight-one' ? 'highlights-outer-left-sectionn' : 'highlights-outer-left-sectionn highlights-outer-left-sectionn-style-two'}>
                  <div className="highlights-bubble-one"></div>
                  <div className="highlights-bubble-two"></div>

                  <div className='highlights-inner-left-section'>

                    <div className='highlights-featMsg'>{featMsg}</div>
                    <div className='highlights-title'>{title}</div>

                    <NavLink className='highlights-cta' to={`/highlight/${index}`}>{cta}</NavLink>
                    <div className='highlights-footerText'>{footerText}</div>

                  </div>
                </div>
              </ScrollAnimation>

              <div className="highlights-right-section">
                <img className='highlights-img' src={imagePath} alt="image" draggable={false}/>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Highlights;