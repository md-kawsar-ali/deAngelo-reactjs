import React from 'react';

const Review = (props) => {
    const { img, author, title, comment } = props.review;
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img className="w-24 h-24 rounded-full mx-auto" src={img} alt="" width="384" height="512" />
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “{comment}”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-sky-500 font-bold dark:text-sky-400">
                        {author}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                        {title}
                    </div>
                </figcaption>
            </div>
        </figure>
    );
};

export default Review;