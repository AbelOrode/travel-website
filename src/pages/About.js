
import {useContext} from 'react'; // The useContext object simply allows a state to widely accessed by any components. Simply put it turns a state to a Global State
import ModalContext from "../context/ModalContext";

const  About = () => {

    //Object destructing => Make an object into distinct values
    const {state, dispatch} = useContext(ModalContext);

    console.log('This is the about page', state);
    return(
        <h1>This is the About page</h1>
    )
}

export default About;