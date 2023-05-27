import React, { useEffect, useState } from 'react';
import './HomeUp.css'
import SingleChef from '../SingleChef/SingleChef';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const HomeUp = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div >
            <section className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-lg">
                        <h1 className="text-5xl text-white font-bold">Japanese Cuisine</h1>
                        <p className="py-6 text-white">Japanese cuisine is renowned for its delicate flavors, exquisite presentation, and emphasis on fresh, high-quality ingredients. It reflects a harmonious blend of tradition and innovation, rooted in centuries of culinary artistry. Rice, seafood, vegetables, and soy-based products form the foundation of Japanese cuisine.</p>
                        <button className="btn btn-primary">Explore Now</button>
                    </div>
                </div>
            </section>
            <section className='flex justify-between items-center px-36 py-20'>
                <div className='w-1/2 me-20'>
                    <h1 className="text-4xl text-primary font-bold">About Us</h1>
                    <p className="py-6 text-black">Japanese cuisine is renowned for its delicate flavors, exquisite presentation, and emphasis on fresh, high-quality ingredients. It reflects a harmonious blend of tradition and innovation, rooted in centuries of culinary artistry. Rice, seafood, vegetables, and soy-based products form the foundation of Japanese cuisine.</p>
                    <button className="btn btn-primary">Read More</button>
                </div>
                <div className='w-1/2'>
                    <img src="https://i.ibb.co/Fxh2dT1/cccc.jpg" className='rounded-md' />
                </div>
            </section>
            <section className='my-8 px-36'>
                <h1 className="text-4xl text-primary font-bold text-center mb-4">Our Chefs</h1>
                <div className='grid grid-cols-3'>
                    {
                        chefs.map(chef =>
                            <SingleChef key={chef.id} chef={chef}></SingleChef>
                        )
                    }
                </div>

            </section>
            <section className='flex justify-between items-center px-36  py-20'>
                <div className='w-1/2 me-20'>
                    <h1 className="text-4xl text-primary font-bold">Contact Us</h1>
                    <p className="py-6 text-black">Have a question, feedback, or need assistance? Our Contact Us section is designed to make it easy for you to reach out and get the support you need. Our dedicated support team is here to assist you with any inquiries or concerns you may have.</p>
                    <div className='flex gap-4'>
                        <FaFacebook className='text-3xl'></FaFacebook>
                        <FaInstagram className='text-3xl'></FaInstagram>
                        <FaTwitter className='text-3xl'></FaTwitter>
                        <FaLinkedin className='text-3xl'></FaLinkedin>
                    </div>


                </div>
                <div className='w-1/2 border  shadow-md shadow-indigo-500/50 bg-base-100 px-4 py-4 rounded-md'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <input type="text" placeholder="Your Message" className="input input-bordered" />
                        <label className="label">

                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Send Message</button>
                    </div>
                </div>

            </section >
        </div >
    );
};

export default HomeUp;