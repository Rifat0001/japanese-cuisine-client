import React, { useEffect, useState } from 'react';
import './HomeUp.css'
import SingleChef from '../SingleChef/SingleChef';
const HomeUp = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div className='px-36'>
            <section className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl text-white font-bold">Japanese Cuisine</h1>
                        <p className="py-6 text-white">Japanese cuisine is renowned for its delicate flavors, exquisite presentation, and emphasis on fresh, high-quality ingredients. It reflects a harmonious blend of tradition and innovation, rooted in centuries of culinary artistry. Rice, seafood, vegetables, and soy-based products form the foundation of Japanese cuisine.</p>
                        <button className="btn btn-primary">Explore Now</button>
                    </div>
                </div>
            </section>
            <section className='flex justify-between items-center  py-20'>
                <div className='w-7/12 me-20'>
                    <h1 className="text-4xl text-primary font-bold">About Us</h1>
                    <p className="py-6 text-black">Japanese cuisine is renowned for its delicate flavors, exquisite presentation, and emphasis on fresh, high-quality ingredients. It reflects a harmonious blend of tradition and innovation, rooted in centuries of culinary artistry. Rice, seafood, vegetables, and soy-based products form the foundation of Japanese cuisine.</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
                <div className='w-5/12'>
                    <img src="https://i.ibb.co/Fxh2dT1/cccc.jpg" className='rounded-md' alt="" />
                </div>
            </section>
            <section className=''>
                <h1 className="text-4xl text-primary font-bold text-center mb-4">Our Chefs</h1>
                <div className='grid grid-cols-3'>
                    {
                        chefs.map(chef =>
                            <SingleChef key={chef.id} chef={chef}></SingleChef>
                        )
                    }
                </div>

            </section>
        </div>
    );
};

export default HomeUp;