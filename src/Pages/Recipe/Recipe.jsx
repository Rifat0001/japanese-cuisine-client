import React from 'react';

const Recipe = ({ recipe }) => {
    const { title, short_details, cooking_method, image, rating } = recipe;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                <figure><img src={image} className='h-52 w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p>{short_details}</p>
                    <p><span className='font-bold'>Cooking Method:</span>  {cooking_method}</p>
                    <p><span className='font-bold'>Rating:</span> {rating}</p>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;