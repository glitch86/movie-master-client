import React from 'react';

const TopMovies = ({datas}) => {
    const filtered = [...datas].sort((a, b) => b.rating - a.rating);
    console.log(filtered);

    console.log(filtered);
    return (
        <div>
            <h1>Top Rated Movies</h1>

        </div>
    );
};

export default TopMovies;