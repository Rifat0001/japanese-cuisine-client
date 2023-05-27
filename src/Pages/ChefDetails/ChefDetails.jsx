import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ChefDetails = () => {
    const { id } = useParams();
    const chefDetals = useLoaderData();
    console.log(chefDetals);
    return (
        <div className='px-36 py-4'>
            <h1 className="text-4xl text-primary text-center font-bold">Chef Details</h1>
            <ToastContainer />
            <section className='flex justify-between items-center py-20'>
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
            <div className='grid grid-cols-3'>
                {
                    chefDetals.recipes.map(recipe => <Recipe recipe={recipe} key={recipe.id}></Recipe>)
                }
            </div>

        </div>
    );
};

export default ChefDetails;