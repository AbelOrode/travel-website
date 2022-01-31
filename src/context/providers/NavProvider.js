import {useReducer} from 'react';
import NavContext from '../NavContext';
import NavReducer from '../reducers/NavReducer';

const NavProvider = (props) => {

    const [state, dispatch] = useReducer(NavReducer, false); //The false parameter by default takes a false value which prevents the naviagtaion from being visible
    return (

       <NavContext.Provider value={{state, dispatch}}>
           {props.children}
       </NavContext.Provider>

    )

}

export default NavProvider;