import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 fixed left-0 right-0 top-0">
      <div>
        <nav className="flex align-center justify-between ">
          <a href="" className="font-bold text-2xl">
            dolla
          </a>

          <ul className="flex gap-4 items-center">
            <li className="relative py-2 px-[1.25rem] link">
              <a href="">About</a>
              <div className=""></div>
            </li>
            <li className="relative py-2 px-[1.25rem]">
              <a href="">Discover</a>
            </li>
            <li className="relative py-2 px-[1.25rem]">
              <a href="">Services</a>
            </li>
            <li className="relative py-2 px-[1.25rem]">
              <a href="">Sign Up</a>
            </li>
          </ul>

          <a
            href=""
            className="font-semibold text-black py-2 px-[1.25rem] px-4 rounded-[100vh] bg-green-400"
          >
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
