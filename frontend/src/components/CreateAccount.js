import React from 'react';

const CreateAccount = () => {
  return (
    <div className="min-h-screen bg-pink-200">
      {/* Header with website name */}
      <div className="absolute top-0 left-0 p-6">
        <h1 className="text-2xl font-extrabold text-gray-50">Give</h1>
      </div>
      
      {/* Main content */}
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-md w-full space-y-8">
            <div>
                <p className="mt-2 text-left font-bold text-gray-50">
                    When you can't decide, post a poll and let your people pick.
                </p>
            </div>

            <form className="mt-8 space-y-6 bg-gray-50 p-8 rounded-3xl">
            <div className="space-y-4">
                <p className="text-left text-lg font-extrabold text-gray-900">
                    Create Account
                </p>
                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="First name"
                        />
                    </div>
                
                    <div>
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Last name"
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
                        className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                    />
                </div>

                {/* Password */}
                <div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>

                {/* Confirm Password */}
                <div>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Confirm password"
                    />
                </div>

                {/* Birthday */}
                <div>
                    <label htmlFor="birthday" className="text-left block text-sm font-medium text-gray-700">
                        Birthday
                    </label>
                    <input
                        id="birthday"
                        name="birthday"
                        type="date"
                        className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Birthday"
                    />
                </div>
            </div>

            {/* Disclaimer text */}
            <div className="text-left text-[10px] text-gray-500 leading-relaxed">
                By Clicking Create Account, you agree to our Terms and Conditions and that you have read our Data Policy, including our Cookie Use. You may receive promotional Emails and SMS notifications and can opt out at any time.
            </div>

            <div>
                <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-extrabold rounded-md text-white bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300 transition duration-150 ease-in-out"
                >
                Create Account
                </button>
            </div>

            <div className="text-center">
                <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                        type="button"
                        className="font-medium text-yellow-400 hover:text-yellow-500 transition duration-150 ease-in-out"
                    >
                        Sign in here
                    </button>
                </p>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
