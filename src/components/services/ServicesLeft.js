const ServicesLeft = (props) => {

    return (
        <div>
            <div className="services__left">
                <h1 className="services__left__heading animation">{props.heading}</h1>
                <p className="services__left__paragraph animation">{props.subHeading}</p>
            </div>
        </div>
    )

}

export default ServicesLeft;