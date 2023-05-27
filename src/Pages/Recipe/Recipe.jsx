import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
const Recipe = ({ recipe }) => {
    const [disable, setDisable] = useState(false);
    const handleDisable = event => {
        setDisable(!event.target.checked)
        toast("Added to favorites")
    }
    const { title, short_details, cooking_method, image, rating } = recipe;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mt-4">
                <figure><img src={image} className='h-52 w-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{title}</h2>
                    <p>{short_details}</p>
                    <p><span className='font-bold'>Cooking Method:</span>  {cooking_method}</p>

                    <div className='flex'>
                        <span className='font-bold me-2'>Rating:</span>
                        {rating}
                        <Rating className='ms-2' style={{ maxWidth: 100 }} value={Math.round(rating || 0)} readOnly />
                    </div>
                    <button onClick={handleDisable} disabled={disable} className='btn btn-primary'>
                        <div className='flex justify-center '>
                            Favorite <FaHeart className='ms-4'></FaHeart>
                        </div>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Recipe;