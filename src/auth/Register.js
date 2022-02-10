import {useContext, useState} from 'react';
import ModalContext from '../context/ModalContext';
import {OPEN_MODAL} from '../context/types/ModelTypes'

const Register = (props) => {

const {dispatch} = useContext(ModalContext);

//Binding Input form data

const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
})

const registerForm = (e) => {
    e.preventDefault(); //Prevent the form from submiting on page load
    console.log(state);
}

    return(
        <div>
            <form onSubmit = {registerForm}>
                <div className ="modal__heading">
                    <h3>Create Account</h3>
                </div>
                <div className = "group">
                    <input type = "text" name = "" className="group__control" placeholder ="Enter Name" onChange={(e) => setState({...state, name: e.target.value})} value={state.name}/>
                </div>
                <div className="group">
                    <input type = "email" name="" className="group__control" placeholder = "Enter Email" onChange={(e) => setState({...state, email: e.target.value})} value={state.email}/>
                </div>
                <div className="group">
                    <input type="password" name="" className="group__control" placeholder = "Create Password" onChange={(e) => setState({...state, password: e.target.value})} value={state.password}/>
                </div>
                <div className="group modal__row">
                    <input type= "submit" name="" className="btn-dark" value="Register"/>
                    <span onClick={() => dispatch({type: OPEN_MODAL, payload: props.currentModal})}>Already have an account?</span>
                </div>
        </form>
        </div>
    )

}

export default Register;