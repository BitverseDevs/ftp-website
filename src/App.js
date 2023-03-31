// import { Main } from "./pages/sitehome";
import { upperNavData, footerList } from "data/sitehome";
import { footerBg } from "data/uiData";
import StaticNavMsg from "pages/sitehome/static-nav-msg/staticnavmsg";
import Uppernav from "pages/sitehome/uppernav/uppernav";
import Main from "./pages/sitehome/main";
import About from "pages/about/about";
import FooterV1 from "pages/footer/footerv1";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import 'fonts/fonts.scss';

function App() {
  return (
    <BrowserRouter>
        <StaticNavMsg/>
        <Uppernav navList={upperNavData}/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <FooterV1 footerList={footerList} footerBg={footerBg}/>
    </BrowserRouter>

  );
}

export default App;
