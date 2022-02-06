const ServicesLeft = (props) => {

    return (
        <div>
            <div className="services__left">
                <h1 className="services__left__heading">{props.heading}</h1>
                <p className="services__left__paragraph">{props.subHeading}</p>
            </div>
        </div>
    )

}

export default ServicesLeft;