import { LazyLoadComponent } from "react-lazy-load-image-component"
import { useContext } from "react";
import GalleryContext from "../../context/GalleryContext";

const LightBox = () => {
    const {galleryStore : {currentLightBox}, } = useContext(GalleryContext);

    return(
        
        <div className="gallery__lightbox">
            <h4>{currentLightBox.name}</h4>
            <div className="gallery__lightbox__card">
                <div className="gallery__lightbox__card__image">
                    <LazyLoadComponent src={currentLightBox.image} alt={currentLightBox.name}/>
                </div>
            </div>
        </div>
   
    )
}

export default LightBox;