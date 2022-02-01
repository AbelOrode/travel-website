import {Link} from 'react-router-dom';

import {useContext} from 'react';
import NavContext from '../context/NavContext';
const Nav = () => {


    const {state, dispatch} = useContext(NavContext);
    
    
return (

    <div>

    {state ? <div className="navLayer"> </div> : ''}    
         
        <div className={state ? 'nav nav--close' : 'nav nav--open'}>
            <div className="nav__content">
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </div>
        </div>
    </div>
   

)

}

export default Nav
