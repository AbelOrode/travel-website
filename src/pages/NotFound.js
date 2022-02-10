import { Helmet } from 'react-helmet-async';
import {useState} from 'react';
import Header from '../components/Header'
import { Link } from 'react-router-dom';

const NotFound = () => {

    const [state] = useState({
        heading: 'OOps, 404',
        paragraph: 'Sorry, the page you are looking for does not exists',
        image: '/assets/images/404.jpg'
    })
    return(
        <div>
            <Helmet>
                <title>Not Page</title>
                <meta name = "description" content="Not Found Page" />
            </Helmet>


            <Header heading={state.heading} paragraph={state.paragraph} image={state.image}>
                <Link to ='/' className='btn-default'>Go to home</Link>
            </Header>
        </div>
    )
}

export default NotFound;