import Header from '../components/Header'
import {useState} from 'react';
import Modal from '../components/Modal';
import Register from '../auth/Register';
import Login from '../auth/Login'
import { useContext } from 'react';
import ModalContext from '../context/ModalContext';
import {OPEN_MODAL} from '../context/types/ModelTypes';
import { Helmet } from 'react-helmet-async';
import Destinations from '../components/Destinations';


const Home = () => {

    
     const {dispatch} = useContext(ModalContext);
   
     const [state] = useState({

        heading : 'We are travel friends',
        paragraph : 'Come and join us we travel the most famous and beautiful places in the world'

    })

    const [registerModal] = useState('registerModal');
    const [loginModal] = useState('loginModal');

    return(
        <div>
            <Helmet>
                <title>Travel Friends</title>
                <meta name = "description" content="travel to the world with travel friends"/>
                <meta name = "keywords" content ="travel, travel tours, airline" />
            </Helmet>
            <Header heading={state.heading} paragraph = {state.paragraph}>
                 <button onClick={() => dispatch({type: OPEN_MODAL, payload: registerModal})} className='btn-default'>Get Started</button>
            </Header>

            <Modal current = {registerModal}>
                <Register currentModal = {loginModal}/>
            </Modal>
            <Modal current = {loginModal}>
                <Login currentModal = {registerModal}/>
            </Modal>

            <Destinations/>
           
        </div>
    )

}

export default Home;