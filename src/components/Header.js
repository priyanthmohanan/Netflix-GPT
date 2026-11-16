import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from "react";
import { LOGO } from "../utils/constant"

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error")
      });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    //Unsubscribe when component unmounts//
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black flex justify-between z-10">
      <img className="w-24" src={LOGO}
        alt="logo" />
      {user && <div className="flex p-2">
        <img alt="user-icon"
          className="w-8 h-8"
          src={user ?.photoURL} />
        <button onClick={handleSignOut} className="font-bold text-white">Sign out</button>
      </div>}
    </div>
  )
}

export default Header