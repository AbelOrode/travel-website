
import { useContext } from "react";
import ModalContext from "../context/ModalContext";
import {CLOSE_MODAL} from '../context/types/ModelTypes';
import Register from '../auth/Register';
import Login from '../auth/Login';


const Modal = (props) => {

    //Destructure the objects inorder to access it as distinct values
    const {state, dispatch} = useContext(ModalContext);
    
    
    const close = (e) => {
        if (e.target.getAttribute('class')== 'modal'){
            dispatch({type: CLOSE_MODAL});
        }
    }

    return state.modalStatus && state.current === props.current ? 
        <div className="modal" onClick={close}>
            <div className="modal__body">
               {props.children}
            </div>
        </div>      :  '' 
    

}

export default Modal;