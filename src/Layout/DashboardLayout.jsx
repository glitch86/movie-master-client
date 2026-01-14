import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import dummy from "../assets/eumquaecum.webp";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { FiLogOut, FiUser } from "react-icons/fi";
import ThemeToggle from "../Hooks/ThemeToggle";

const DashboardLayout = () => {
  const { user, loading, signOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const theme = localStorage.getItem("theme") || "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
        navigate("/");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar justify-between w-full bg-base-300">
          <div className="flex items-center">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4"><Link to={"/"}>Movie Master</Link></div>
          </div>

          <div className="mx-5 flex gap-4">
            {loading ? (
              <h1>loading....</h1>
            ) : (
              <div className="dropdown dropdown-end">
                <img
                  tabIndex={0}
                  role="button"
                  className={`h-10 w-10 rounded-full mx-auto ${
                    user ? " " : "hidden"
                  }`}
                  src={user?.photoURL || dummy}
                  alt=""
                  referrerPolicy="no-referrer"
                />
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <a>Profile</a>
                  </li>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  {/* <li>
                    <Link to={"/movies/add"}>Add Movies</Link>
                  </li> */}
                  <li>
                    <button className="btn" onClick={handleSignout}>
                      <Link to={"/login"}>
                        <div className="flex  gap-2 items-center">
                          <span>Log Out</span>
                          <FiLogOut />
                        </div>
                      </Link>
                    </button>
                  </li>
                </ul>
                {/* {console.log(user.photoURL)} */}
              </div>
            )}
            <div>
              <ThemeToggle></ThemeToggle>
            </div>
          </div>
        </nav>
        {/* Page content here */}
        <div className="p-4">
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <Link to={"/dashboard"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                    className="my-1.5 inline-block size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  </svg>
                </Link>
                <span className="is-drawer-close:hidden">Homepage</span>
              </button>
            </li>

            {/* List item */}
            <li>
              <NavLink
                to={"/dashboard/profile"}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Profile"
              >
                {/* user icon */}
                <FiUser size={19}></FiUser>
                <span className="is-drawer-close:hidden">Profile</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
