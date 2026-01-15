import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa6";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { auth } from "../Firebase/sdk";
// import bg from '../assets/SimpleShiny.svg';

// console.log(bg);

const Login = () => {
  const { setUser, googleSignIn } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const location = useLocation();
  const from = location.state || "/";
  const navigate = useNavigate();

  // sign in with email and pass
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log(res);
        setUser(res.user);
        toast.success("Signin successful");
        navigate(from);
      })
      .catch((e) => {
        // console.log(e);
        toast.error(e.message);
      });
  };

  const handleCred = (e) => {
    e.preventDefault();

    setEmail("user@movie.com");
    setPass("User#01");
    console.log("succ");
  };

  // google sign in
  const handleGoogleSignin = () => {
    googleSignIn()
      .then((res) => {
        setUser(res.user);
        navigate(from);
        toast.success("Login Successful");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <div className="text-left">
          <h1 className="heading">Login</h1>
        </div>
        <form
          onSubmit={handleSignin}
          className="fieldset rounded-box w-xs p-4 backdrop-blur-sm shadow-sm"
        >
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
            defaultValue={email}
          />

          <div className="relative">
            <label className="label">Password</label>
            <input
              type={showPass ? "text" : "password"}
              className="input"
              name="password"
              placeholder="Password"
              defaultValue={pass}
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-2 top-9 cursor-pointer z-50"
            >
              {showPass ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          <span className="hover:underline cursor-pointer">
            <Link>Forget Password</Link>
          </span>

          <button className="btn btn-primary" onClick={handleCred}>
            Autofill as Demo User
          </button>
          <button className="btn btn-neutral mt-4">Login</button>

          <div className="divider">OR</div>
          <button
            type="button"
            onClick={handleGoogleSignin}
            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer my-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>
          <p className="text-center text-sm mt-3">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="  hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
