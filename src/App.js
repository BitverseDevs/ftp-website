// import { Main } from "./pages/sitehome";
import { upperNavData, footerList } from "data/sitehome";
import { footerBg } from "data/uiData";
import StaticNavMsg from "pages/sitehome/static-nav-msg/staticnavmsg";
import Uppernav from "pages/sitehome/uppernav/uppernav";
import Main from "./pages/sitehome/main";
import About from "pages/about/about";
import FooterV1 from "pages/footer/footerv1";
import ContactUs from "pages/contactus/contactus";
import PageWrapper from "hoc/pageWrapper/pageWrapper";
import WebsitePortfolio from "pages/portfolio/websiteportfolio";
import Team from "pages/organization/team";
import TeamProfile from "pages/organization/teamProfile/teamProfile";
import { websitePortfolioList } from "data/sitehome";
import { BrowserRouter, Route, Routes, Navigate, HashRouter } from "react-router-dom";
import ScrollToTop from "hoc/scrolltotop";
import useScrollToRef from "custom-hooks/use-scroll-to-ref/use-scroll-to-ref";
import ServiceOffering from "pages/serviceOffering/ServiceOffering";
import ProductsAndServices from "pages/products&services/ProductsAndServices";
import HighlightDetail from "pages/highlights details/HighlightDetail";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TeamV2 from "pages/teamV2/TeamV2";
import RealContactUs from "pages/realContactUs/RealContactUs";
import HRISServices from "pages/services/hrisServices/HRISServices";
import SoftwareDevService from "pages/services/softwareDevService/SoftwareDevService";
import WebDevService from "pages/services/webDevService/WebDevService";
import AboutV2 from "pages/aboutV2/AboutV2";
import TeamV3 from "pages/teamV3/TeamV3";
import 'fonts/fonts.scss';

function App() {
  const [section1Ref, scrollToSection1] = useScrollToRef(-120);
  const scrollToSection = (sectionId, pathUrl, navigate) => {
    navigate(pathUrl);
    switch (sectionId) {
      case "section1":
        setTimeout(()=>{
          scrollToSection1();
        }, 0)
        break;
      default:
        return;
    }
  };
  return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <HashRouter>
          <PageWrapper>
          
            {/* <StaticNavMsg/> */}
            <Uppernav navList={upperNavData} scrollToSection={scrollToSection}/>
            <ScrollToTop>
              <Routes>
                <Route path='/' element={<Main scrollRefs={section1Ref}/>} />
                <Route path='/services' element={<ServiceOffering />} />
                <Route path='/about' element={<AboutV2 />} />
                <Route path='/highlight/:highlightId' element={<HighlightDetail />}/>
                <Route path='/contact-us' element={<ContactUs />}/>
                <Route path='/hris-service' element={<HRISServices />}/>
                <Route path='/software-dev-service' element={<SoftwareDevService />}/>
                <Route path='/web-dev-service' element={<WebDevService portfolio={websitePortfolioList} />}/>
                <Route path='/clients' element={<WebsitePortfolio portfolios={websitePortfolioList}/>}/>
                <Route path='/partners' element={<WebsitePortfolio portfolios={websitePortfolioList}/>}/>
                <Route path='/real-contact-us' element={<RealContactUs />}/>
                <Route path='/organization' element={<TeamV3  fromWhere='redirect' />}/>
                <Route path='/team-profile/:id/:arr?' element={<TeamProfile />}/>
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </ScrollToTop>
            <FooterV1 footerList={footerList} footerBg={footerBg}/>
          </PageWrapper>
        </HashRouter>
      </LocalizationProvider>
  );
}

export default App;
