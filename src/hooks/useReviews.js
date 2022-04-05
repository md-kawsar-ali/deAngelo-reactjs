import { useEffect, useState } from 'react';

const useReviews = (isAll) => {
    let [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews-data.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    if (isAll) {
        return [reviews, setReviews];
    } else {
        reviews = reviews.slice(0, 6);
        return [reviews, setReviews];
    }
}

export default useReviews;