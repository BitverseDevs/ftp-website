import { useParams } from "react-router-dom";
import { highlightsItems } from "data/sitehome";
import FAQ from "pages/sitehome/faq/FAQ";
import './highlightdetail.scss';

const HighlightDetail = () => {
  let { highlightId } = useParams();

  let { id, title, featMsg, cta, footerText, imagePath } =  highlightsItems[highlightId];

  return (
    <div id="highlightDetail-outer-container">
      <div id="highlightDetail-inner-container">
        <div id="highlightDetail-container">
          <div id="highlightDetail-featMsg">
            Lorem ipsum dolor sit amet.
          </div>

          <div id="highlightDetail-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam obcaecati deserunt error.
          </div>

        </div>          
      </div>
      <FAQ />
    </div>
  )
}

export default HighlightDetail;