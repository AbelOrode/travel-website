import { useReducer } from "react";
import ServicesContext from "../ServicesContext";
import ServicesReducer from "../reducers/ServicesReducer";
import services from '../../data/services'

const ServicesProvider = (props) => {

    const [servicesData, dispatch] = useReducer(ServicesReducer, {
        servicesData: services
    });

    return(
        <div>
            <ServicesContext.Provider value={{servicesData, dispatch}}>
                {props.children}
            </ServicesContext.Provider>
        </div>
    )

}

export default ServicesProvider;