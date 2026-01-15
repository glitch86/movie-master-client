import React from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to={'/about'} className="link link-hover">About us</Link>
        <Link to={'/privacy&terms'} className="link link-hover"> Privacy and Terms </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://x.com/JunaitP" target="_blank">
            <FaXTwitter className=" size-6"/>
          </a>
          <a href="https://www.linkedin.com/in/polok-ahmed/" target="_blank">
            <FaLinkedin size={21}></FaLinkedin>
          </a>
          <a href="https://www.facebook.com/junaitislam.polokz" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by MovieMaster
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
