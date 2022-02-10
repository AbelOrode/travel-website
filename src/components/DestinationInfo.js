import DestinationDetails from '../components/DestinationDetails';

const DestinationInfo = ({details}) => {
    
    return(

        <div>
            <div className="destinationInfo">
                <div className="container">
                    <h2 className="heading heading-animation">Overview</h2>
                    <div className="row">
                        <div className="col-8">
                            <p className="destination__p animation">{details.details}</p>
                        </div>
                    </div>
                    <h2 className="heading heading-animation">Good to know</h2>
                    <div className="row animation">
                        <div className="col-8">
                            <DestinationDetails title="Language" text={details.language}/>
                            <DestinationDetails title="Currency" text={details.currency}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default DestinationInfo;