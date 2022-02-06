import ServicesLeft from '../services/ServicesLeft';
import { useState, useContext } from 'react';
import ServicesContext from './../../context/ServicesContext';
import ServiceList from './ServicesList';
const Services = () => {

    const [state] = useState({
        heading    : 'Why customers love travel friends? Because we provide unique services',
        subHeading : 'Our aim is to provide professional and unique services to customers, and we have provided high quality services to our customers thats why they love travel friends'
    })

    //Accssing services data by destructuring with the help of the contextAPI. 
    const {servicesData : {servicesData}} = useContext(ServicesContext);
    //console.log(servicesData);

    return (

        <div>
            <div className="services">
                <div className="services__contents">
                    <div className="container">
                        <div className="row ml-minus-15 mr-minus-15 services__contents__container">
                            <div className="col-6 p-15">
                                <ServicesLeft heading = {state.heading} subHeading = {state.subHeading}/>
                            </div>
                            <div className="col-6 p-15">
                                <ServiceList services = {servicesData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Services;