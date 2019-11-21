import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import StarRatingComponent from 'react-star-rating-component';
const ReviewForm = (props) => {
    const [reviews, setReviews] = useState({
        review: "dada",
        stars: 2,
        reviewer_id: parseInt(localStorage.getItem('id')),
        book_id: props.bookid,
    })
    
    const handleChange = e => {
        setReviews({
            ...reviews,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = e => {
        console.log(reviews)
        e.preventDefault()
           axiosWithAuth().post(`https://oer-bookr.herokuapp.com/api/reviews/`, reviews)
            .then(res => {
                console.log('ReviewForm', res)
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
                 <button>Add Review</button>
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

export default ReviewForm;