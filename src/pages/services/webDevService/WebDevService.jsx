import Carousel from 'react-multi-carousel';
import { webDevSpecs, webDevProcess, webDevServiceCTAInfo } from './webDevServiceData';
import FAQ from 'pages/sitehome/faq/FAQ';
import ContactUsV2 from 'pages/contactUsV2/ContactUsV2';
import 'react-multi-carousel/lib/styles.css';
import './webDevService.scss';

const WebDevService = ({ portfolio }) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  return (
    <div id="web-service-outer-container">
      <div id="web-service-inner-container">

        <div id="section-one">
          <div id="section-one-container-one">
            <div id="section-one-featMsg">Our Services</div>
            <div id="section-one-title">Website Design, Development & Content Services</div>
            <div id="section-one-desc">we customize, we tailor</div>
          </div>
        </div>

        <div id="section-two">
          <div id="section-two-container-one">
            <Carousel
              responsive={responsive} 
              autoPlay={true}
              infinite={true}
              containerClass="carousel-container"
              arrows={false}
              itemClass="item-class"
              centerMode={true}
            >
              {portfolio.map(({ id, src, alt, srcLink }) => (
                <li className='website-portfolio--figure-wraps' key={id}>
                  <div className='website-portfolio--figure-desc'>
                  <p className='website-portfolio--figure-title'>{alt}</p>
                    <button className='website-portfolio--figure-button'>
                      <a href={srcLink} target={'_blank'}>
                        {'Visit Website'}
                      </a>
                    </button>
                  </div>
                  <img className='website-portfolio--figure-items' src={src} alt={alt}></img>
                </li>
              ))}
            </Carousel>
          </div>

          <div id="section-two-container-two">
            <div id="section-two-inner-container-two">
              {webDevSpecs.map(({id, title, desc, iconName}) => (
                <div key={id} className="webDevSpec-container">
                  <div className="iconContainer">
                    <img className='icon' src={iconName} alt="Web Development Specs" draggable={false} />
                  </div>
                  <div className="textsContainer">
                    <div className="title">{title}</div>
                    <div className="desc">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div id="section-three">
          <div id="header-container">
            <div id="title">A thoughtful Process</div>
            <div id="desc">Our Web Development Workflow</div>
          </div>

          <div id="process-container">
            <div id="section-three-overlay"></div>

            {webDevProcess.map(({id, step, title, desc, iconName}) => (
              <div key={id} className="process-item">
                <div className="item-section-one">
                  <div className="step">{step}</div>
                  <img className='iconName' src={iconName} alt="Process Icon" />
                </div>

                <div className="item-section-two">
                  <div className="title">{title}</div>
                  <div className="desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="section-four">

        </div>

        <ContactUsV2 contactV2Info={webDevServiceCTAInfo} />
        <FAQ />
      </div>
    </div>
  )
}

export default WebDevService;