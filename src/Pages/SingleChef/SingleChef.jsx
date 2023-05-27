import React from 'react';

const SingleChef = ({ chef }) => {
    const { id, name, details, img, experience, rec_numbers, like } = chef;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p><span className='font-bold'>Experience:</span> {experience}</p>
                    <p><span className='font-bold'>Recipes:</span>  {rec_numbers}</p>
                    <p><span className='font-bold'>Like:</span> {like} </p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;