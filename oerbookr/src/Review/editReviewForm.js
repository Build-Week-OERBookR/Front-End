import React, {useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import StarRatingComponent from 'react-star-rating-component';

const EditReviewForm = (props) => {
   const [reviews, setReviews] = useState(props.currentReviews)
    
   useEffect(() => {
       setReviews(props.currentReviews)
   }, [props])

    const handleChange = e => {
        setReviews({
            ...reviews,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e, id) => {
        console.log(reviews)
        e.preventDefault()
           axiosWithAuth().put(`https://oer-bookr.herokuapp.com/api/reviews/${id}`, reviews)
            .then(res => {
                console.log('EditReviewForm', res)
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const onStarClick = nextvalue =>{
        setReviews({...reviews,
            stars:nextvalue
        })
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input 
                    type = 'text'
                    placeholder = 'Write Review'
                    name = 'review'
                    value = {reviews.review}
                    onChange = {handleChange}
                />
                 <button>Edit Review</button>
                 <h2>Rating from state: {reviews.stars}</h2>
                    <StarRatingComponent 
                    name="stars" 
                    starCount={5}
                    value={reviews.stars}
                    onStarClick={onStarClick}
                    />
            </form>
        </div>
    )
}

export default EditReviewForm;