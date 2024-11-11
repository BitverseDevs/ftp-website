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
      <HashRouter>
        <PageWrapper>
        
          <StaticNavMsg/>
          <Uppernav navList={upperNavData} scrollToSection={scrollToSection}/>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Main scrollRefs={section1Ref}/>} />
              <Route path='/about' element={<About />} />
              <Route path='/contact-us' element={<ContactUs />}/>
              <Route path='/portfolio' element={<WebsitePortfolio portfolios={websitePortfolioList}/>}/>
              <Route path='/organization' element={<Team />}/>
              <Route path='/team-profile/:id' element={<TeamProfile />}/>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ScrollToTop>
          <FooterV1 footerList={footerList} footerBg={footerBg}/>
        </PageWrapper>
      </HashRouter>
  );
}

export default App;
