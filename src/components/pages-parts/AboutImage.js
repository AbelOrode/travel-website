import {LazyLoadImage} from "react-lazy-load-image-component"
import { useState } from "react";


const AboutImage = () => {
    const [state] = useState({
        aboutImage: '/assets/about/about.jpg'
    })
    return(
        <div className="page__image">
            <LazyLoadImage src={state.aboutImage} alt="About Side-Image" />
        </div>
    )
}

export default AboutImage;