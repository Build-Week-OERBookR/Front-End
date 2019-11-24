import React, {useContext, useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {ReviewContext} from '../contexts/ReviewContext'
const ReviewForm = (props) => {


    const handleChange = e => {
        setReviews({
            ...reviews,
            [e.target.name]: e.target.value,
            book_id: props.bookid,
        })
    }

    // const handleSubmit = e => {
    //     e.preventDefault()
    //        axiosWithAuth().post(`https://oer-bookr.herokuapp.com/api/reviews/`, reviews)
    //         .then(res => {
    //             window.location.reload()
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    // const onStarClick = nextvalue =>{
    //     setReviews({...reviews,
    //         stars:nextvalue
    //     })
    // }
    const {reviews, addReview, setReviews, onStarClick} = useContext(ReviewContext)
    return (
        <div>
        <Modal isOpen={props.modal} toggle={props.toggle} >
            <ModalHeader toggle={props.toggle}>Review Form</ModalHeader>
            <ModalBody>
                <Form onSubmit = {addReview}>
                    <StarRatingComponent 
                        name='stars'
                        starCount={5}
                        value={reviews.stars}
                        onStarClick={onStarClick}
                        />
                    <textarea 
                        type = 'text'
                        placeholder = 'Write A Review'
                        name = 'review'
                        value = {reviews.review}
                        onChange = {handleChange}
                    />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button style={{'background' : '#7EAFBA'}} 
                        onClick={(e)=> { props.toggle();
                            addReview(e);
                        }} 
                        className='primary'
                >
                            Submit Review
                </Button>
            </ModalFooter>
        </Modal>
        </div>
    )
}

export default ReviewForm;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    textarea{
        width: 90%;
        height: 75px;
        border: 0px;
        color: rgba(0,0,0,0.72);
        background-color: #f8f8f8;
        border-bottom: 2px solid #7EAFBA;
    }
    textarea:focus{
        outline: none;
    }

    button{
        background: #7EAFBA;
    }
`;