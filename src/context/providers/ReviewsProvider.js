import { useReducer } from "react"
import ReviewsReducer from "../reducers/ReviewsReducer"
import reviews from '../../data/reviews';
import ReviewsContext from "../ReviewsContext";

const ReviewsProvider = (props) => {

    const [reviewsData, dispatch] = useReducer(ReviewsReducer, {
        reviews : reviews,
    })

    return(
        <div>
            <ReviewsContext.Provider value = {{reviewsData, dispatch}}>
                {props.children}
            </ReviewsContext.Provider>
        </div>
    )

}

export default ReviewsProvider;