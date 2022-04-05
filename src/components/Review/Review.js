import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import Rating from 'react-rating';

const Review = (props) => {
    const { img, author, title, comment, rate } = props.review;
    return (
        <figure className="bg-slate-100 rounded-xl py-6 px-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src={img} alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-base text-slate-700 font-medium">
                        “{comment}”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-green-600 font-bold dark:text-sky-400">
                        {author}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {title}
                    </div>
                    <Rating
                        initialRating={rate}
                        emptySymbol={<StarIcon className="h-5 w-5 text-slate-300" />}
                        fullSymbol={<StarIcon style={{ color: '#d99b00' }} className="h-5 w-5" />}
                        readonly
                        className='mt-1'
                    ></Rating>
                </figcaption>
            </div>
        </figure>
    );
};

export default Review;