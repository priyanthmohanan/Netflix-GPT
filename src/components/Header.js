import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";


const Header = () => {
  const user = useSelector(store => store.user)
  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        // An error happened
        console.error(error);
      });
  }

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black flex justify-between">
      <img className="w-24" src="https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAT4DsJqpLaLn4NdWj0hMqiS44NBBHsef6fJbMCXfInwFPyWRZWORRKIX6OoMypwFbV-skx1kkO0bw5qyPw4TGYECuHYwI_zw-n7CzjzEILCnaUNLQfmgkh-p1HzjExVEw9zDBrZd_di2.svg"
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