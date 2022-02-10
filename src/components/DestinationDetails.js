const DestinationDetails = ({title, text}) => {

    return (

        <div>
            <div className="destinationInfo__details">
                <div className="destinationInfo__details__head animation">{title}</div>
                <div className="destinationInfo__details__text animation">{text}</div>
            </div>
        </div>

    )

}

export default DestinationDetails;