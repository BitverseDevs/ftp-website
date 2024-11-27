import { useParams } from "react-router-dom";
import { highlightsItems, highlightHRDetail } from "data/sitehome";
import FAQ from "pages/sitehome/faq/FAQ";
import ContactUsV2 from "pages/contactUsV2/ContactUsV2";
import './highlightdetail.scss';

const HighlightDetail = () => {
  let { highlightId } = useParams();

  let { highlight_id, title, featMsg, cta, footerText, alt, imagePath, heroImage,  vectorBg, imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, moreInfo, contactV2Info } =  highlightsItems[highlightId];

  return (
    <div id="highlightDetail-outer-container">
      <div id="highlightDetail-inner-container">
        <div id="highlightDetail-hero-container">
          <div id="highlightDetail-title">{title}</div>
          <div id="highlightDetail-footerText">{footerText}</div>
        </div>

        <div id="highlightDetail-sample-img-container">
          <div id="highlightDetail-vector-one-container">
            {/* <img id='highlightDetail-vector-one-item' src={imageTwo} alt={alt} /> */}
          </div>
          <img id='highlightDetail-img-one' src={heroImage} alt={alt} draggable={false}/>
        </div>

        <div id="highlightDetail-more-info-container">
          <div id="highlightDetail-more-info-header">
            <div id="highlightDetail-more-info-title">
              Upgrade your HR and payroll systems today and lead the way in modern HR management
            </div>
            <div id="highlightDetail-more-info-featMsg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cum.
            </div>
          </div>

          <div id="highlightDetail-more-info-section-outer-container">
            {moreInfo.map(({id, title, featMsg}, index) => (
              <>
                <div className={index === 1 ? 
                  'highlightDetail-more-info-section-inner-container highlightDetail-more-info-section-inner-container-style-two ' 
                : 
                  'highlightDetail-more-info-section-inner-container'
                }>
                  
                  {/* IMAGE CONTAINERRRR */}
                  <div 
                    className={id === 'more-info-one' ? 
                      'highlightDetail-more-info-section-img-container' 
                    : 
                      highlight_id === 'highlight-one' ? 
                        'highlightDetail-more-info-section-img-container highlightDetail-more-info-section-img-container-style-three' 
                      : 
                        'highlightDetail-more-info-section-img-container highlightDetail-more-info-section-img-container-style-two'
                  }>

                    {id == 'more-info-one' ?
                      <>
                          <img className="highlightDetail-more-info-section-img-six" src={imageSix} alt={alt} draggable={false} />
                          <img className={ highlight_id === 'highlight-one' ? 
                          'highlightDetail-more-info-section-img-one-style-two' 
                        : 
                          'highlightDetail-more-info-section-img-one'} src={imageOne} alt={alt} draggable={false} />
                        <img src={imageTwo} alt={alt} draggable={false} />
                      </>
                    : ''}

                    {id == 'more-info-two' ? 
                      <>
                        {highlight_id === 'highlight-one' ? 
                          <div id="highlightHRDetailCtn">
                            {highlightHRDetail.map(({ id, title, abbreviation, footer, iconName }, index) => (
                              <div key={id} className="highlightHRDetailItem">

                                <img className="highlightHRDetailIcon" src={iconName} alt="Highlight Icon" />

                                <div className="highlightHRDetailHeader">
                                  <div className="highlightHRDetailTitle">{title}</div>
                                  <div className="highlightHRDetailAbbre">{abbreviation}</div>
                                </div>

                                <div className="highlightHRDetailFooter">{footer}</div>
                              </div>
                            ))}
                          </div>
                        : 
                          ''}

                        {highlight_id === 'highlight-one' ? 
                          <img className="highlightDetail-more-info-section-img-five" src={imageFive} alt={alt} draggable={false} />
                        : 
                          <>
                            <img className="highlightDetail-more-info-section-img-three" src={imageThree} alt={alt} draggable={false} />
                            <img className="highlightDetail-more-info-section-img-four" src={imageFour} alt={alt} draggable={false} />
                            <img className="highlightDetail-more-info-section-img-five" src={imageFive} alt={alt} draggable={false} />
                          </>
                        }

                      </>
                    : ''}

                    {id == 'more-info-three' ? 
                      <>
                        <img className={ highlight_id === 'highlight-one' ? 
                          'highlightDetail-more-info-section-img-one-style-three' 
                        : 
                          'highlightDetail-more-info-section-img-one'} src={imageThree} alt={alt} draggable={false} 
                        />

                        <img src={imageFour} alt={alt} draggable={false} />
                      </> 
                    : ''}

                  </div>

                  <div key={id} className="highlightDetail-more-info-section-header">
                    <div className="highlightDetail-more-info-section-title">
                      {title}
                    </div>
                    {featMsg.map((msg, index) => (
                      <div key={index} className="highlightDetail-more-info-section-featMsg">{msg}</div>
                    ))}
                  </div>
                </div>

                {id === 'more-info-one' || highlight_id === 'highlight-one' && id == 'more-info-two' ? 
                  <div className={id === 'more-info-one' ? 'highlightDetail-more-info-divider-s-one' : 'highlightDetail-more-info-divider-s-two'}>
                    <img className="highlightDetail-more-info-divider-img" src={'/assets/highlight-divider.png'} alt="Divider Image"  draggable={false}/>
                  </div>
                : ''}
              </>
            ))}
          </div>
        </div>

        <ContactUsV2 contactV2Info={contactV2Info} />
      </div>
      <FAQ />
    </div>
  )
}

export default HighlightDetail;