import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { createUserWithEmailAndPassword, signInWithPhoneNumber, updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { createUser, handleUpdateProfile } = useContext(AuthContext);
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photoUrl.value;
        console.log(name, email, password, photo)
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Enter a capital letter');
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Enter a small letter');
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Enter a number');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be greater than 6 character !');
            return;
        }
        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser);
                handleUpdateProfile(createUser, name, photo);
                setError('');
                setSuccess('Successfully Registered !');
                event.target.reset();
            })
            .catch(error => {
                console.log(error)
                setError(error.message);
            })

    }

    return (
        <div>
            <div className="py-20 ">
                <h1 className='text-center font-bold my-4 text-3xl text-primary'>Register here</h1>
                <Form onSubmit={handleRegister} className="card-body w-1/4 mx-auto rounded shadow-lg shadow-indigo-500/50">
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
                        <p className='text-red-500 mb-2'>{error}</p>
                        <p className='text-emerald-500 mb-2'>{success}</p>
                        <button className="btn btn-primary">Register</button>
                        <small className='mt-2'>Already have an account? <Link to='/login' className='text-primary'>Login</Link> </small>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;