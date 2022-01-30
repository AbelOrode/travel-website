import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ModelContext from './context/ModalContext';
import ModalProvider from './context/providers/ModalProvider';

//console.log(ModelContext);

function App() {

  const[state, dispatch] = useState({modalStatus: false});
  
  return (
    
    <Router>
       <ModalProvider>
       <Routes>
            <Route path ='/' exact element = {<Home/>}/>
            <Route path = '/about' exact element = {<About/>}/>  
            <Route component = {NotFound} />     
        </Routes>
       </ModalProvider>
    </Router>
  );

}

export default App;
