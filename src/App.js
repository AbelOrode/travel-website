import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import ModalProvider from './context/providers/ModalProvider';
import Nav from './components/Nav'
import NavProvider from './context/providers/NavProvider';
import Toggle from './components/Toggle';
import {HelmetProvider} from 'react-helmet-async';
import DestinationsProvider from './context/providers/DestinationsProvider';
import ServicesProvider from './context/providers/ServicesProvider';
import ReviewsProvider from './context/providers/ReviewsProvider';
import GalleryProvider from './context/providers/GalleryProvider';
import Contact from './pages/Contact';
import AnimationsProvider from './context/providers/AnimationsProvider';

function App() {

  const[state, dispatch] = useState({modalStatus: false});
  
  return (
      //The context APi makes a state globally accessible.
    <Router>
       <ModalProvider>
         <NavProvider>
           <GalleryProvider>
           <Toggle/>
          <Nav/>
          <AnimationsProvider>
            <DestinationsProvider>             
              <ServicesProvider>
                <ReviewsProvider>
                <HelmetProvider>
                  <Routes>
                      <Route path ='/' exact element = {<Home/>}/>
                      <Route path = '/about' exact element = {<About/>}/>  
                      <Route path ='/details/:id' exact element={<Details/>}/>
                      <Route path ='/contact' exact element={<Contact/>}/>
                      <Route path='*' element = {<NotFound/>}/>     
                    </Routes>
                </HelmetProvider>
              </ReviewsProvider>
              </ServicesProvider>
            </DestinationsProvider>
            </AnimationsProvider>
            </GalleryProvider>
         </NavProvider>
       </ModalProvider>
    </Router>
  );

}

export default App;
