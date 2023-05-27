import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {
    const { id } = useParams();
    const chefDetals = useLoaderData();
    console.log(chefDetals);
    return (
        <div className='px-36 py-4'>
            <h1 className="text-4xl text-primary text-center font-bold">Chef Details</h1>
            <section className='flex justify-between items-center px-36 py-20'>
                <div className='w-1/2 me-20'>
                    <h1 className="text-3xl  font-bold">{chefDetals.name}</h1>
                    <p className="py-6 text-black">{chefDetals.details}</p>
                    <p><span className='font-bold'>Experience:</span> {chefDetals.experience}</p>
                    <p><span className='font-bold'>Recipes:</span>  {chefDetals.rec_numbers}</p>
                    <p><span className='font-bold'>Like:</span> {chefDetals.like} </p>
                </div>
                <div className='w-1/2'>
                    <img src={chefDetals.img} className='rounded-md' alt="" />
                </div>
            </section>
            <h1 className="text-4xl text-primary text-center font-bold">Recipes</h1>
            {
                chefDetals.map(recipe => <p>{recipe.name}</p>)
            }
        </div>
    );
};

export default ChefDetails;