import {useState} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
function Header({heading, paragraph, children, image}){

    const [state] = useState({

        video: '/assets/videos/header.mp4',
        poster: '/assets/images/screen.jpg',
        logo: '/assets/images/logo.png'

    })

    return (
        <div className='header'>
            
            <div className='container pr'>
            <div className ='header__logo'>
                <Link to="/"><LazyLoadImage src={state.logo} alt='logo' /></Link>
            </div>
            </div>
            <div className ='header__video'>
                {image ? (
                    <LazyLoadImage src={image} alt = {image} />
                ) : (
                    <video 
                    src={state.video} 
                    autoPlay 
                    loop 
                    muted 
                    poster={state.poster}/>
                )}
                
            </div>
            <div className ='header__contents'>
                <div className ='container'>
                    <div className ='header__contents__text'>
                        <div className ='header__contents__text__child'>
                            <h1 className ='header__contents__text__child__h1'>
                               {heading}
                            </h1>
                            <p className ='header__contents__text__child__p'>
                               {paragraph}
                            </p>
                            <div className ='header__contents__text__child__link'>
                               {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;