import React from 'react';

const TopMovie = ({data}) => {
    // console.log(data);
    const {posterUrl, title} = data;

    return (
        <div className='flex'>
            <div className='flex'>
                <div className='rotate-270 origin-bottom-left align-text-top text-nowrap '>
                    {title}
                </div>
                <div className='h-60'>
                    <img className='h-full' src={posterUrl} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopMovie;