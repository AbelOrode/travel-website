import Header from '../components/Header'
import {useState} from 'react';
import Modal from '../components/Modal';
import Register from '../auth/Register';
import Login from '../auth/Login'
import { useContext } from 'react';
import ModalContext from '../context/ModalContext';
import {OPEN_MODAL} from '../context/types/ModelTypes';

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
            <Header heading={state.heading} paragraph = {state.paragraph}>
                 <button onClick={() => dispatch({type: OPEN_MODAL, payload: registerModal})} className='btn-default'>Get Started</button>
            </Header>

            <Modal current = {registerModal}>
                <Register currentModal = {loginModal}/>
            </Modal>
            <Modal current = {loginModal}>
                <Login currentModal = {registerModal}/>
            </Modal>
           
        </div>
    )

}

export default Home;