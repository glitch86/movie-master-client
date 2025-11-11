import React from 'react';

const TopMovieCard = ({data}) => {
    const {title, posterUrl, rating} = data;
    console.log("top", data)
    return (
        <div className='flex gap-3 py-3 items-center'>
            <div>
                <img src={posterUrl} className='h-24' alt="" />
            </div>
            <div>
                <p>{title}</p>
                <span>{rating}</span>
            </div>
        </div>
    );
};

export default TopMovieCard;