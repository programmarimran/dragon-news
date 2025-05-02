import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id}=useParams()
    return (
        <div className=' text-center font-bold'>
            this is category news - ({id})
        </div>
    );
};

export default CategoryNews;