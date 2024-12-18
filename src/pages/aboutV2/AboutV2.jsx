// LFG
import { aboutMissionVisionGoal, aboutGallery } from './aboutV2Data';
import { brandArea } from 'data/sitehome';
import BrandArea from 'pages/sitehome/brandarea/brandarea';
import FAQ from 'pages/sitehome/faq/FAQ';
import TeamV3 from 'pages/teamV3/TeamV3';
import SEO from 'components/seo/seo';
import './aboutV2.scss';

const AboutV2 = () => {
  
  return (
    <div id="about-outer-container">
      <SEO title='Website About - Bitverse Corporation' 
        description='Our products have helped businesses and local government units streamline their processes and improve overall efficiency.'
        keyword='Bitverse, bitverse, Bitverse Corportion, bitverse corporation, bitverse it, Bitverse it, Bitverse IT Solutions, Bitverse Website Portfolio, Bitverse Products, Bitverse Corporation Products'
        type='website'
        name='Bitverse Corporation'/>
      <div id="about-inner-container">
        <div id="section-one">
          <div id="header-container">
            <div id="featMsg">about company</div>
            <div id="title">Our History</div>
          </div>
          <div id="body-container">
            <img id="left-section" src='/assets/about-hero-img-one.png' alt='About Hero Image' draggable={false}/>

            <div id="right-section">
              <div id="item-one">
                <img id="item-one-img" src='/assets/about-hero-img-two.png' alt='About Hero Image' draggable={false}/>
                <div id="item-one-texts">
                  <h2>Founded in 2014, Bitverse pioneere corporate automation and software solutions. After pausing operations in 2020 due to the pandemic, we resumed in 2021, continuing our mission to innovate.</h2>
                </div>
              </div>
              <div id="item-two">
                <div id="item-two-texts">
                  <h1></h1>
                  <h2></h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="section-two">
          {aboutMissionVisionGoal.map(({id, title, desc, iconName}) => (
            <div key={id} className="item-container">
              <img src={iconName} alt="About Mission Vision Goal Image" />
              <div className="title">{title}</div>
              <div className="desc">{desc}</div>
            </div>
          ))}
        </div>

        <div id="section-three">
          {aboutGallery.map(({id, title, desc, iconName}) => (
            <div className='galleryItem'>
              <img key={id} src='/assets/about-hero-img-one.png' alt="About Gallery" />
              <div className="details">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <TeamV3 fromWhere='about'/>
      <BrandArea brands={brandArea}/>
      {/* <FAQ /> */}
    </div>
  )  
}

export default AboutV2;