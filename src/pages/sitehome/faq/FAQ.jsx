import SectionTitle from 'components/sectionTitle/sectionTitle';
import { faqHeaderDetails } from 'data/sitehome';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { faqList } from 'data/sitehome';
import './faq.scss';

const FAQ = () => {

  const {  title, featMsg } = faqHeaderDetails;

  return (
    <div id='faq-outer-container'>
      <div id="faq-inner-container">
        <SectionTitle title={title} featMsg={featMsg} marginBottom={'75'}/>
        <div id="accordion-section">
          {faqList.map(({id, items}, index) => (
            <div>
                {items.map(({id, question, answer, icon}, index) => (
                  <Accordion className='accordion-container'>
                    <AccordionSummary 
                      className='accordion-summary'
                      expandIcon={ <img className='expandIcon' src={icon} alt='expand icon' /> }
                    >
                      <Typography variant='h6'>
                        {question}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails className='accordion-details'>
                      {answer}
                    </AccordionDetails>
                  </Accordion>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

} 

export default FAQ;