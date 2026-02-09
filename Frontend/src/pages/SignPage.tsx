// import React from 'react'
// import Header from '../components/Header'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

const SignPage = () => {

  const [formData, setFormData] = useState({ email: '', password: '', username: '' });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    console.log(formData)
    // Here you will fetch() to your http://localhost:5000/auth/signup
    const UserSignUp = async () => {
      try {
        // http://localhost:10000/api/auth/signup
        await axios.post("https://innews-6hkq.onrender.com/api/auth/signup", {
            username: formData.username,
            email: formData.email,
            password: formData.password
        })
        localStorage.setItem("email", formData.email)
        localStorage.setItem("userName", formData.username)
        window.location.href = "/"

      } catch (error) {
        console.log(error)
        if(AxiosError.ERR_BAD_RESPONSE) {
          window.alert("There is a user already with this email!")
        }

      }
    }
    UserSignUp()


    
  };
  const DiscordSingUp = () => {
      // http://localhost:10000/auth/discord
      window.location.href = "https://innews-6hkq.onrender.com/auth/discord"
  }

  return (
    <div>
      <main className="min-h-screen flex items-center justify-center bg-gray">
      <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-5xl text-yellow-200 font-bold mb-6 text-center text-white-800">Create Account</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white">Username</label>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-200 focus:border-yellow-200"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Email Address</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-200 focus:border-yellow-200"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-200 focus:border-yellow-200"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-200 text-white py-2 rounded-md hover:bg-yellow-200 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center flex justify-end"><span className="w-1/3 border-t"></span></div>
          <div className="absolute inset-0 flex items-center"><span className="w-1/3 border-t"></span></div>
          <div className="relative flex justify-center text-sm"><span className="px-2 bg-gray text-gray-500">Or continue with</span></div>
        </div>

        <div className="space-y-3">
          <button 
            onClick={() => console.log("Google Login Clicked")}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-800 text-white transition duration-200"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5 mr-2" alt="Google" />
            Google
          </button>

          <button 
            onClick={() => DiscordSingUp()}
            className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-800 text-white transition duration-200"
          >
            <img src="https://www.svgrepo.com/show/452188/discord.svg" className="w-5 h-5 mr-2" alt="Discord" />
            Discord
        </button>
        </div>

        <div className="mt-8 text-center">
        <p className="text-gray-400">
          Have an account already?{' '}
          <Link to={"/login"} className="text-yellow-200 hover:underline font-medium">
            Log In here
          </Link>
        </p>
      </div>
      </div>
    </main>
    </div>
  )
}

export default SignPage
