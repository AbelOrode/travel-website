import { useContext, useEffect } from "react";
import {DETAILS, CITIES} from "../context/types/DestinationTypes"
import Header from '../components/Header';
import DestinationsContext from "../context/DestinationsContext";
import {useParams} from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DestinationInfo from '../components/DestinationInfo'
import Cities from "../components/Cities"
const Details = () => {
    const {destinationsData, dispatch} = useContext(DestinationsContext)
   
    const {details, filteredCities} = destinationsData;

    const {id} = useParams();

    useEffect(() =>{

        //The useEffect hook runs one time when the component has been loaded

        dispatch({type: DETAILS, payload: id})
        dispatch({type: CITIES, payload: id})
        window.scrollTo(0, 0);

    }, [id]);

    return (

        <div>
            <Helmet>
                <title>{details.name}</title>
            </Helmet>
            <Header heading={details.name} image = {details.bigImage}></Header>
            <DestinationInfo details = {details}/>
            <Cities cities = {filteredCities} name={details.name}/>
        </div>
    )

}

export default Details;