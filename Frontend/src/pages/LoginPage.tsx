// import React from 'react'
import { useState } from 'react';
// import Header from '../components/Header';
import { Link } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import { Spinner } from '../components/ui/spinner';
// import { useEffect } from 'react';

const LoginPage = () => {

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState<boolean>(false)

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  console.log(localStorage.getItem("authToken"))

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true)
    console.log("Form Submitted:", formData);
      const UserLogIn = async () => {
            console.log("Form Submitted:", formData);
      try {
        
        const posting = await axios.post("http://localhost:10000/api/auth/login", {
            email: formData.email,
            password: formData.password
        })
        const token = posting.data.token;
        localStorage.setItem("token", token)
        localStorage.setItem("email", formData.email)
        const res = await fetch("http://localhost:10000/api/user/me", {
            headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();
        localStorage.setItem("userName", data.userName)
        
        window.location.href = "/account"

      } catch (error) {
        console.log(error)
        if(AxiosError.ERR_BAD_RESPONSE) {
          window.alert("There is no user with this account")
        }
            setLoading(false)

      }
    }
    UserLogIn()
  };

  return (
    <div>

      <main className="min-h-screen flex items-center justify-center bg-gray">

        {loading === false ? 
          <div className="bg-black p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-5xl text-yellow-200 font-bold mb-6 text-center text-white-800">Log In</h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
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
                Log In
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 items-center flex justify-end"><span className="w-1/3 border-t"></span></div>
              <div className="absolute inset-0 flex items-center"><span className="w-1/3 border-t"></span></div>
              <div className="relative flex justify-center text-sm"><span className="px-2 bg-gray text-gray-500">Or continue with</span></div>
            </div>


            <div className="mt-8 text-center">
            <p className="text-gray-400">
              Don't have an account?{' '}
              <Link to={"/signup"} className="text-yellow-200 hover:underline font-medium">
                Sign up here
              </Link>
            </p>
          </div> 

        </div>
            :  <div className='flex flex-col'>
                  <Spinner></Spinner>
                  <p id='loadingMsg'></p>
                </div>
                }
    </main>
    </div>
  )
}

export default LoginPage