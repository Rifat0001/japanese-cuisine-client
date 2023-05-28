import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
const SingleChef = ({ chef }) => {
    const { id, name, details, img, experience, rec_numbers, like } = chef;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mt-4 mx-0 ">
                <LazyLoad >
                    <img src={img} className='rounded' />
                </LazyLoad>

                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p><span className='font-bold'>Experience:</span> {experience}</p>
                    <p><span className='font-bold'>Recipes:</span>  {rec_numbers}</p>
                    <p><span className='font-bold'>Like:</span> {like} </p>
                    <div className="card-actions">

                        <Link to={`/chef/${id}`} ><button className="btn btn-primary"> View</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;