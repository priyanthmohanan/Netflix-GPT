import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <>
      <div className="absolute">
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/12cedf4e-d9cf-4a31-b80f-7e6fbe4ef998/web/IN-en-20261109-TRIFECTA-perspective_12c44b81-de29-4047-ae67-40a52ffa45ba_large.jpg"
          alt="background" />
      </div>
      <form className="absolute p-12 bg-black bg-opacity-80 w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && <input type="type" placeholder="Full Name" className="p-2 my-4 bg-gray-700 w-full" />}
        <input type="email" placeholder="Email Address" className="p-2 my-4 bg-gray-700 w-full" />
        <input type="password" placeholder="Password" className="p-2 my-4 bg-gray-700 w-full" />
        <button type="submit" className="p-2 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm ? 'New to Netflix?Sign Up Now' : 'Already registered? Sign In Now'}
        </p>
      </form>
    </>
  )
}

export default Login