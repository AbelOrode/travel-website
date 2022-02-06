import { useContext, useState } from "react";
import ReviewsContext from "../../context/ReviewsContext";
import ReviewBody from "./ReviewBody";



const Reviews = () => {

    const {reviewsData : {reviews}, } = useContext(ReviewsContext);

    console.log(reviews);

    const[state] = useState({

        heading: `What our customers are saying?`,

    })

    return(
        <div>
           <div className="reviews">
               <div className="container">
                   <h2 className="heading">{state.heading}</h2>
                   <div className="row ml-minus-15 mr-minus-15">
                        {reviews.length > 0 ? reviews.map((review, index) => (
                            <ReviewBody key={index} review={review}/>
                        )) : ''}
                   </div>
               </div>
           </div>
        </div>
    )

    
}

export default Reviews;