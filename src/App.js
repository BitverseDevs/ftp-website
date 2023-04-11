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
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ScrollToTop from "hoc/scrolltotop";
import 'fonts/fonts.scss';

function App() {

  return (
      <BrowserRouter>
        <PageWrapper>
          <StaticNavMsg/>
          <Uppernav navList={upperNavData}/>
          <ScrollToTop>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact-us' element={<ContactUs />}/>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </ScrollToTop>
          <FooterV1 footerList={footerList} footerBg={footerBg}/>
        </PageWrapper>
      </BrowserRouter>
  );
}

export default App;
