import {useContext, useState} from 'react';
import ModalContext from '../context/ModalContext';
import {OPEN_MODAL} from '../context/types/ModelTypes'

const Login = (props) => {

    const {dispatch} = useContext(ModalContext);
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const loginForm = (e) => {
        e.preventDefault();
        console.log(state);
    }
    return (

      <div>
        <form onSubmit={loginForm}>
            <div className ="modal__heading">
                <h3>Login Form</h3>
            </div>
            <div className="group">
                <input type = "email" name="" className="group__control" placeholder = "Enter Email" onChange={(e) => setState({...state, email: e.target.value})} value={state.email}/>
            </div>
            <div className="group">
                <input type="password" name="" className="group__control" placeholder = "Enter Password" onChange={(e) => setState({...state, password: e.target.value})} value={state.password}/>
            </div>
            <div className="group flex space-between y-center">
                <input type= "submit" name="" className="btn-dark" value="Login"/>
                <span onClick={() => dispatch({type: OPEN_MODAL, payload: props.currentModal})}>Create new account?</span>
            </div>
         </form>   
    </div>

    )
}

export default Login;  