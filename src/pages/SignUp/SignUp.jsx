import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
     const [name, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');

     const handleNameChange = (e) => {
          setName(e.target.value);
     };

     const handleEmailChange = (e) => {
          setEmail(e.target.value);
     };

     const handlePasswordChange = (e) => {
          setPassword(e.target.value);
     };

     const handleConfirmPasswordChange = (e) => {
          setConfirmPassword(e.target.value);
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          if (password !== confirmPassword) {
               alert('Passwords do not match');
               return;
          }
          // Add sign-up logic here
     };

     const handleGoogleSignUp = () => {
          // Add Google sign-up logic here
     };

     const handleGithubSignUp = () => {
          // Add GitHub sign-up logic here
     };

     return (
          <div className="flex justify-center items-center h-screen bg-gray-100">
               <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up for RestNest</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                         <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                   Name
                              </label>
                              <input
                                   type="text"
                                   id="name"
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   value={name}
                                   onChange={handleNameChange}
                                   required
                              />
                         </div>
                         <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                   Email
                              </label>
                              <input
                                   type="email"
                                   id="email"
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   value={email}
                                   onChange={handleEmailChange}
                                   required
                              />
                         </div>
                         <div>
                              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                   Password
                              </label>
                              <input
                                   type="password"
                                   id="password"
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   value={password}
                                   onChange={handlePasswordChange}
                                   required
                              />
                         </div>
                         <div>
                              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                   Confirm Password
                              </label>
                              <input
                                   type="password"
                                   id="confirmPassword"
                                   className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                   value={confirmPassword}
                                   onChange={handleConfirmPasswordChange}
                                   required
                              />
                         </div>
                         <button
                              type="submit"
                              className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                         >
                              Sign Up
                         </button>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                         <button
                              onClick={handleGoogleSignUp}
                              className="w-full py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600"
                         >
                              Sign Up with Google
                         </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                         <button
                              onClick={handleGithubSignUp}
                              className="w-full py-2 mt-4 text-white bg-gray-700 rounded-md hover:bg-gray-800"
                         >
                              Sign Up with GitHub
                         </button>
                    </div>
                    <div className="text-center mt-4">
                         <p className="text-sm text-gray-700">
                              Already have an account?{' '}
                              <Link to="/login" className="text-blue-500 hover:underline">
                                   Login
                              </Link>
                         </p>
                    </div>
               </div>
          </div>
     );
};

export default SignUp;
