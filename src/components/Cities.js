import { LazyLoadImage } from "react-lazy-load-image-component";
import {BsStopwatch} from 'react-icons/bs';

const Cities = ({cities, name}) => {

const format = (price) => {
    return `$${price}.00`;
}
    
    return (

        <div>
            <div className="cities">
                <div className="container">
                    <div className="cities__container">
                      <h2 className="heading heading-animation">Cities in {name}</h2>
                      <div className="row ml-minus-15 mr-minus-15">
                          {cities.length > 0  ? cities.map((city) =>(
                            <div className="col-3 p-15" key={city.id}>
                                <div className="cities__body animation">
                                    <div className="cities__body__image">
                                        <LazyLoadImage src={city.image} alt={city.image}/>
                                        <div className={city.status === 'Bestselling' ? 'bestselling' :
                                             city.status === 'New' ? 'new' : 
                                             city.status === 'Hot' ? 'hot'
                                              : ''
                                              }>
                                                  {city.status} 
                                        </div>
                                    </div>
                                    <div className="cities__body__contents">
                                        <div className="cities__body__contents__top">
                                            <div className="cities__body__contents__top__name">
                                                {city.name}
                                            </div>

                                            <div className="cities__body__contents__top__duration">
                                                <BsStopwatch size={18} color="df2189"/>
                                                <div className="cities__body__contents__top__duration__time">
                                                    {city.duration}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cities__body__contents__price">
                                            <span className="cities__body__contents__price__dollar">{format(city.price)}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          )): `No cities in ${name}`}
                      </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Cities;