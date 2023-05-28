import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className="py-20 ">
                <h1 className='text-center font-bold my-4 text-3xl text-primary'>Register here</h1>
                <div className="card-body w-1/4 mx-auto rounded shadow-lg shadow-indigo-500/50">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" required name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URl</span>
                        </label>
                        <input type="text" name='photoUrl' required placeholder="photo url" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <small className='mt-2'>Already have an account? <Link to='/login' className='text-primary'>Login</Link> </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;