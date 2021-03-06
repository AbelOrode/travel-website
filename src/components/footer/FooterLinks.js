import {useState, useContext} from 'react';
import DestinationsContext from '../../context/DestinationsContext';
import ShowFooterLinks from './ShowFooterLinks';

const FooterLinks = () => {

    const {destinationsData : {destinations}, } = useContext(DestinationsContext);
   
    const [state] = useState({
        
        pages: [
            {id: 1, name: 'home', route: '/'},
            {id: 1, name: 'about', route: '/about'},
            {id: 1, name: 'contact', route: '/contact'}
        ],

        partners: [
            {id: 1, name: 'booking', route: 'https://www.booking.com/'},
            {id: 2, name: 'trivago', route: 'https://www.trivago.com/'},
            {id: 3, name: 'hostel world', route: 'https://www.hostelworld.com/'},
            {id: 4, name: 'trip advisor', route: 'https://www.tripadvisor.com/'}
        ],
        headings: {
            pages: 'pages',
            partners : 'partners',
            destinations: 'destinations',
        },
    })

    const {headings, pages, partners} = state;

    return(

        <div>
            <div className='row'>
                <div className='col-4 p-15'>
                    <h3 className='footer__heading heading-animation'>{headings.pages.toUpperCase()}</h3>
                    <ShowFooterLinks links = {pages}/>
                </div>
                <div className='col-4 p-15'>
                    <h3 className='footer__heading heading-animation'>{headings.partners.toUpperCase()}</h3>
                    <ShowFooterLinks links = {partners} external = {true} />
                </div>
                <div className='col-4 p-15'>
                    <h3 className='footer__heading heading-animation'>{headings.destinations.toUpperCase()}</h3>
                    <ShowFooterLinks links = {destinations}/>
                </div>
            </div>
        </div>
    )

}

export default FooterLinks