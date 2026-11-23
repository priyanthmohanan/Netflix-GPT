import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from "react";
import { LOGO, LANGUAGE } from "../utils/constant";
import { showGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from '../utils/langSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const showGptPage = useSelector(store => store.gptSearch ?.showGptSearch)
  const defaultLanguage = useSelector(store => store.lang.language)


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

  const handleGptSearch = () => {
    dispatch(showGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black flex flex-col md:flex-row justify-between z-10">
      <img className="w-24 mx-auto md:mx-0" src={LOGO}
        alt="logo" />
      {user && (
        <div className="flex p-2 justify-between items-center gap-2">
          {showGptPage &&
            <select className="p-2 m-2 bg-gray-800 text-white rounded-lg"
              defaultValue={defaultLanguage}
              onChange={handleLanguageChange}>
              {LANGUAGE && LANGUAGE.map(lang => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))
              }
            </select>}
          <button onClick={handleGptSearch}
            className="rounded-lg bg-purple-800 text-white py-2 px-4 my-2 mx-4">
            {!showGptPage ? 'GPTSearch' : 'Homepage'}
          </button>
          <img alt="user-icon"
            className="hidden md:inline-block w-8 h-8"
            src={user.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign out
        </button>
        </div>
      )}
    </div>
  )
}

export default Header