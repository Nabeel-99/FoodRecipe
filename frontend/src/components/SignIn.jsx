import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const SignIn = ({signIn, showForm, toggleSignIn, handleCloseForm}) => {
 
  return (
    <>
    <div className={showForm ? "absolute top-5 left-0 right-0 flex flex-col items-center justify-center h-screen" : "hidden"}>

        <div className="<"><button onClick={handleCloseForm}><FontAwesomeIcon icon={faXmark} className="w-8 h-8 border rounded-full p-1 "/></button></div>
        { signIn ? ( <form className="bg-white text-black text-left flex flex-col gap-4 p-5 rounded-md w-full z-10  md:w-[30rem] md:mt-5">
            <h2 className="text-3xl font-bold">Create account</h2>
            <div className="flex flex-col">
                <label className="mb-2" htmlFor="email">Email Address</label>
                 <input className=" px-3 p-1 rounded-sm border border-black" type="email" id="email"/>
            </div>
            <div className="flex flex-col">
                <label className="mb-2" htmlFor="firstname">First Name</label>
                 <input className=" px-3 p-1 rounded-sm border border-black" type="text" id="firstname"/>
            </div>
            <div className="flex flex-col">
                <label className="mb-2" htmlFor="lastname">Last Name</label>
                 <input className=" px-3 p-1 rounded-sm border border-black" type="text" id="lastname"/>
            </div>
            <div className="flex flex-col">
                <label className="mb-2" htmlFor="password">Password</label>
                 <input className=" px-3 p-1 rounded-sm border border-black" type="password" id="password"/>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-green-500 text-white w-36 p-2 rounded-md border hover:border-blue-300">Sign up</button>
            </div>
            <div className="flex gap-1 items-center justify-center">
                <p>Already have an account?</p>
                <Link className="font-bold  border text-blue-500" onClick={toggleSignIn}>Login</Link>
            </div>
        </form> ) : (
            <form className="bg-white text-black text-left flex flex-col gap-4 p-5 rounded-md w-full md:w-[30rem]">
            <h2 className="text-3xl font-bold">Sign in</h2>
            <div className="flex flex-col">
                <label className="mb-2" htmlFor="email">Email Address</label>
                 <input className=" px-3 p-1 rounded-sm border border-black" type="email" id="email"/>
            </div>
           
            <div className="flex flex-col">
                <label className="mb-2" htmlFor="password">Password</label>
                 <input className=" px-3 p-1 rounded-sm border border-black" type="password" id="password"/>
            </div>
            <div className="flex items-center justify-center">
                <button className="bg-green-500 text-white w-36 p-2 rounded-md border hover:border-blue-300">Login</button>
            </div>
            <div className="flex items-center justify-center">
                <p>Don't have an account?</p>
                <Link className="font-bold  border text-blue-500" onClick={toggleSignIn}>Sign up</Link>
            </div>
        </form>
        )}
        
    </div>
    </>
  )
}

export default SignIn
