import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signIn, user } = useContext(AuthContext);
    console.log(user);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('User Login Successfully');
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })

    }
    return (
        <div>
            <div className="py-20 ">
                <h1 className='text-center font-bold my-4 text-3xl text-primary'>Login here</h1>
                <Form onSubmit={handleLogin} className="card-body w-1/4 mx-auto rounded shadow-lg shadow-indigo-500/50">
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
                    <div className="form-control mt-6">
                        <p className='text-red-500 mb-2'>{error}</p>
                        <p className='text-emerald-500 mb-2'>{success}</p>
                        <button className="btn btn-primary">Login</button>
                        <hr />
                        <small className='mt-2'>New to Japanese Cuisine? <Link to='/register' className='text-primary'>Create New Account</Link> </small>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;