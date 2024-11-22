import SectionTitle from 'components/sectionTitle/sectionTitle';
import { contactUsCTA } from 'data/sitehome';
import './contactUsV2.scss';

const ContactUsV2 = () => {
  
  const { title, featMsg, buttonOne, buttonTwo } = contactUsCTA;


  return (
    <div id='contactUsV2-outer-container'>
      <div id="contactUsV2-inner-container">
        <SectionTitle fromWhere='contactUsCTA' title={title} featMsg={featMsg} buttonTwo={buttonTwo} />
      </div>
    </div>
  )

}

export default ContactUsV2;