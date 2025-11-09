import React from 'react';

const MyContainer = ({children, classname}) => {
    return (
        <div className={`${classname} container mx-auto px-7`}>
            {children}
        </div>
    );
};

export default MyContainer;