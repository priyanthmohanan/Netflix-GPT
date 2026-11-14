import { useNavigate } from "react-router";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { addUser, removeUser } from "../utils/userSlice"
import { checkValidData } from "../utils/validate"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const validate = () => {
    const message = checkValidData(email.current.value, password.current.value)
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPU5gJUj46ufL6FQfX3XvM7lR7qtcMy63tuj2siLuUQ&s=10",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              console.log(user)
              navigate('/browse')
            })
            .catch((error) => {
              setErrorMessage(error)
            });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
        });
    }
  }

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
      <form onSubmit={(e) => { e.preventDefault() }} className="absolute p-12 bg-black bg-opacity-80 w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm &&
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 bg-gray-700 w-full" />}
        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-4 bg-gray-700 w-full" />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-2 my-4 bg-gray-700 w-full" />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          type="submit"
          onClick={validate}
          className="p-2 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm ? 'New to Netflix?Sign Up Now' : 'Already registered? Sign In Now'}
        </p>
      </form>
    </>
  )
}

export default Login