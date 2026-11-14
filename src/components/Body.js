
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router";
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"


const Body = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    }
  ])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        //appRouter.navigate("/browse");
        //navigate('/browse')
      } else {
        dispatch(removeUser());
        //appRouter.navigate("/");
        //navigate('/')
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body