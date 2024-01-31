import { useEffect, useState } from "react";
import { firebaseApp } from "../../authentication/firebase-config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "next/router";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);
  const [userActive, setUserActive] = useState(false);
  const auth = getAuth(firebaseApp);
  const router = useRouter();

  //Functions
  const toggleBtn = () => {
    setUser(!user);
  };

  const handleSignup = async () => {
    const userCred = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const handleLogin = async () => {
    const usercred = await signInWithEmailAndPassword(auth, email, password);
    router.push("/dashboard");
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    user ? handleLogin() : handleSignup();
  };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       user ? setUser(true) : setUser(false);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

  return (
    <div className="bg-cyan-500 container-fluid h-screen flex justify-center items-center">
      <form className="flex flex-col items-center justify-center px-5 border border-gray-600 h-auto py-24 rounded">
        <label>Enter Your email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded text-black outline-none active:scale-105 p-1"
        />
        <label>Enter Your password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded text-black outline-none hover:scale-100 p-1 "
        />

        <button
          onClick={handleSubmit}
          className="bg-pink-600 p-2 mt-2 rounded-lg"
        >
          {user && <span>Login</span>}
          {!user && <span>Signup</span>}
        </button>

        {!user && (
          <div>
            Already a user? <button onClick={toggleBtn}>Login</button>
          </div>
        )}
        {user && (
          <div>
            Not a user? <button onClick={toggleBtn}>Signup</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default login;
