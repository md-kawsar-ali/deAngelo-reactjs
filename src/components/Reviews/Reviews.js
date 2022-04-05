import React from 'react';
import Review from '../Review/Review';
import useReviews from './../../hooks/useReviews';
import { Link } from 'react-router-dom';

const Reviews = ({ isAll }) => {

    const [reviews] = useReviews(isAll);

    return (
        <section className='bg-white'>
            <div className='container mx-auto items-center px-20 py-24 text-center'>
                <h2 className='text-4xl font-bold text-slate-800 text-center mb-16'>What Client Says About us!</h2>

                <div className="grid grid-cols-3 gap-7">
                    {
                        reviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                {
                    isAll || <Link to="/reviews" className='text-base inline-block uppercase font-semibold text-white bg-green-600  py-3 px-7 rounded-md mt-16'>See All Reviews</Link>
                }
            </div>
        </section>
    );
};

export default Reviews;