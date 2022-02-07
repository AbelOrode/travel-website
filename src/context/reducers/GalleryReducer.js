import {OPEN_LIGHTBOX} from '../types/GalleryTypes'
const GalleryReducer = (state, action) => {
    
    if(action.type === OPEN_LIGHTBOX){
        return{
            ...state,
            lightBoxStatus: true,
            currentLightBox: action.payload,
        }
    }else{
        return state;
    }
    

}

export default GalleryReducer;