import React from 'react'
import {Col, Row} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import AddReviewHook from '../../hook/review/addReviewHook';
import {ToastContainer} from 'react-toastify';
import {useParams} from 'react-router-dom';

const RatePost = () => {
    const {id} = useParams();
    const  [OnChangeReview, OnChangeRateValue, review, reviewTitle, OnChangeReviewTitle, rateValue, user, onSubmit] = AddReviewHook(id)

    let name = ""
    if (user) name = user.name

    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: 5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star"/>,
        halfIcon: <i className="fa fa-star-half-alt"/>,
        filledIcon: <i className="fa fa-star"/>,
        onChange: newValue => {
            OnChangeRateValue(newValue);
        }
    };
    return (
        <div>
            <Row className="mt-3 ">
                <Col sm="12" className="me-5  d-flex">
                    <div className="rate-name  d-inline ms-3 mt-1 ">{name}</div>
                    <ReactStars {...setting} />
                </Col>
            </Row>
            <Row className="border-bottom mx-2">
                <Col className="d-flex me-4 pb-2 flex-column">
                    <input
                        value={reviewTitle}
                        onChange={OnChangeReviewTitle}
                        className="input-form p-2 mt-3"
                        placeholder="Write your review title...."
                    />

                    <textarea
                        value={review}
                        onChange={OnChangeReview}
                        className="input-form-area p-2 mt-3"
                        rows="2"
                        cols="20"
                        placeholder="Write your review...."
                    />
                    <div className="d-flex justify-content-end mt-3">
                        <div onClick={onSubmit} className="product-cart-add px-3  py-2 text-center d-inline">Submit
                        </div>
                    </div>
                </Col>
            </Row>
            <ToastContainer/>
        </div>
    )
}

export default RatePost