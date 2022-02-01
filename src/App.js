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
//console.log(ModelContext);

function App() {

  const[state, dispatch] = useState({modalStatus: false});
  
  return (
    
    <Router>
       <ModalProvider>
         <NavProvider>
           <Toggle/>
          <Nav/>
            <DestinationsProvider>
              <HelmetProvider>
                <Routes>
                    <Route path ='/' exact element = {<Home/>}/>
                    <Route path = '/about' exact element = {<About/>}/>  
                    <Route path ='/details/:id' exact element={<Details/>}/>
                    <Route component = {NotFound} />     
                  </Routes>
              </HelmetProvider>
            </DestinationsProvider>
         </NavProvider>
       </ModalProvider>
    </Router>
  );

}

export default App;
