import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="py-20 ">
                <div className="card-body w-1/4 mx-auto rounded shadow-lg shadow-indigo-500/50">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        <small className='mt-2'>New to Japanese Cuisine? <Link to='/register' className='text-primary'>Create New Account</Link> </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;