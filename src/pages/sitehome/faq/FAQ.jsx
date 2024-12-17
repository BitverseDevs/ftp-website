import SectionTitle from 'components/sectionTitle/sectionTitle';
import { faqHeaderDetails } from 'data/sitehome';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { faqList } from 'data/sitehome';
import './faq.scss';

const FAQ = ({list, title, featMsg}) => {

  // const { title, featMsg } = faqHeaderDetails;

  return (
    <div id='faq-outer-container'>
      <div id="faq-inner-container">
        <div id="accordion-section">
          <SectionTitle title={title} featMsg={featMsg} marginBottom={'75'}/>
          {list.map(({id, items}) => (
            <div key={id} className='accordion-inner-section'>
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
  )

} 

export default FAQ;