import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import './servicesFeatures.scss';

const ServicesFeatures = ({header, list}) => {

  const { title, desc } = header;

  return (
    <div id='services-features-outer-container'>
      <div id="services-features-inner-container">
        <div id="accordion-section">
          <div id="accordion-header-section">
            <div id="accordion-title">{title}</div>
            <div id="accordion-desc">{desc}</div>
          </div>

          <div id="accordion-outer-container">
            {list.map(({id, items}) => (
              <div key={id} className='accordion-inner-container'>
                  {items.map(({id, question, answer, icon}) => (
                    <Accordion key={id} className='accordion-container'>
                      <AccordionSummary 
                        className='accordion-summary'
                        expandIcon={ <img className='expandIcon' src={icon} alt='expand icon' /> }
                      >
                        <Typography className='accordion-question' variant='h6'>
                          {question}
                        </Typography>
                      </AccordionSummary>

                      <AccordionDetails className='accordion-details'>
                        <Typography className='accordion-answer' variant='h6'>
                          {answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 

export default ServicesFeatures;