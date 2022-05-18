import './App.scss';
import './assets/css/animation.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Contactus from './components/contact-us/Contactus'
import Services from './components/services/Services'
import Aboutus from './components/aboutus/Aboutus'
import Crwdworld from './components/crwdworld/Crwdworld'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import FAQ from './components/faqPage/FAQ';
import Teams from './components/Teams/Teams';
import News from './components/news/News';
import PageNotFonund from './components/PageNotFonund/PageNotFonund';
import Crwdmarket from './components/crwdmarket/Crwdmarket';
import Singlenew from './components/singlenew/Singlenew';
import 'animate.css';

function App() {
  return (
    <BrowserRouter>

      <div className="App">


        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='aboutus' element={<Aboutus />} />
          <Route path='services' element={<Services />} />
          <Route path='crwdworld'>
            <Route index element={< FAQ />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='team' element={<Teams />} />
            <Route path='news' element={<News />} />
            <Route path='crwdmarket' element={<Crwdmarket />} />
          </Route>
          <Route path='blog'>
            <Route index element={<Singlenew />} />
            <Route path=':id' element={<Singlenew />} />
          </Route>
          <Route path='contactus' element={<Contactus />} />
          <Route path='*' element={<PageNotFonund />} />
        </Routes>
        <Footer />
        {/* <Routes> */}
        {/* </Routes> */}



      </div>
    </BrowserRouter>
  );
}

export default App;
