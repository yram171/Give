import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const CreateAccount = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        birthday: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (form.password !== form.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, form.email, form.password);
            setSuccess('Account created successfully!');
            // Navigate to login or home
        } catch (err) {
            setError(err.message);
        }
    };

    return (
    <div className="min-h-screen bg-defaultPink font-[Nunito,Poppins,sans-serif]">
      {/* Header with website name */}
      <div className="absolute top-0 left-0 p-6 z-20">
        <h1 className="text-4xl font-extrabold text-backgroundGrey">GIVE</h1>
      </div>
      
      {/* Bar Graph Design */}
      <div className="fixed left-8 bottom-0 flex items-end space-x-2 z-0">
        {/* Bar 1 */}
        <div className="w-12 h-72 bg-lightPinkOpaque rounded-t-lg"></div>
        {/* Bar 2 */}
        <div className="w-12 h-96 bg-lightPinkOpaque rounded-t-lg"></div>
        {/* Bar 3 */}
        <div className="w-12 h-56 bg-lightPinkOpaque rounded-t-lg"></div>
      </div>

      {/* Main content */}
      <div className="flex items-start justify-end relative z-10 min-h-screen">
        <div className="mt-28 w-full mx-6 xl:mx-10 flex flex-col min-h-screen max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            <div className="px-4 sm:px-6 lg:px-8 pb-8">
                <p className="text-center text-2xl font-medium text-backgroundGrey">
                    When you can't decide, post a poll and let your people pick.
                </p>
            </div>

            <form className="bg-backgroundGrey p-8 pb-0 rounded-t-3xl flex-1 flex flex-col" onSubmit={handleSubmit}>
                <p className="text-left text-lg font-bold text-gray-900">
                    Create Account
                </p>
                <div className="mt-8 mx-10 space-y-4 flex-1 pb-8">
                    <div className="space-y-4">
                        {/* First Name and Last Name */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-transparent bg-darkGrey placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                    placeholder="First name"
                                    value={form.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                        
                            <div>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    className="mt-1 appearance-none relative block w-full px-3 py-2 border border-transparent bg-darkGrey placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                    placeholder="Last name"
                                    value={form.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-transparent bg-darkGrey placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                placeholder="Email address"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-transparent bg-darkGrey placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                placeholder="Password"
                                value={form.password}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-transparent bg-darkGrey placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                placeholder="Confirm password"
                                value={form.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Birthday */}
                        <div>
                            <label htmlFor="birthday" className="text-left block text-sm font-bold text-gray-700">
                                Birthday
                            </label>
                            <input
                                id="birthday"
                                name="birthday"
                                type="date"
                                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-transparent bg-darkGrey placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                                placeholder="Birthday"
                                value={form.birthday}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Disclaimer text */}
                    <div className="text-left text-[10px] text-gray-500 leading-relaxed mt-6">
                        By Clicking Create Account, you agree to our Terms and Conditions and that you have read our Data Policy, including our Cookie Use. You may receive promotional Emails and SMS notifications and can opt out at any time.
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    {success && <p className="text-green-500 text-sm">{success}</p>}
                    <div>
                        <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent font-extrabold rounded-md text-white bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 transition duration-150 ease-in-out"
                        >
                        Create Account
                        </button>
                    </div>

                    <div className="text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <button
                                type="button"
                                className="font-medium text-yellow-400 hover:text-yellow-500 transition duration-150 ease-in-out"
                            >
                                Sign in here
                            </button>
                        </p>
                    </div>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;