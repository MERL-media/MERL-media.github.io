// references: 
// https://dev.to/ryaddev/creating-a-responsive-navbar-using-nextjs-and-tailwind-css-48kk

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from '../../public/MERL.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "reviews",
    },
    {
      id: 2,
      link: "articles",
    },
    {
      id: 3,
      link: "rating system",
    },
    {
      id: 4,
      link: "search",
    },
    {
      id: 5,
      link: "sign in",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-neutral-700 nav">
      <div>
        {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
        <h1 className="text-4xl ml-2 text-white font-extrabold">
          <a
            className="link-underline link-underline-black"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <Image src={Logo} width={120} alt="MERL with a pink bird on the right"/>
          </a>
        </h1>
      </div>

      <ul className="md:flex justify-between items-center">
		<li className="nav-links px-4 cursor-pointer font-medium text-sm text-white">
            <Link href="reviews">Reviews</Link>
		</li>
		<li className="nav-links px-4 cursor-pointer font-medium text-sm text-white">
            <Link href="articles">Articles</Link>
		</li>
		<li className="nav-links px-4 cursor-pointer font-medium text-sm text-white">
            <Link href="ratingsystem">Rating System</Link>
		</li>
		<li className="nav-links px-2 cursor-pointer font-medium text-sm"> 
			<input type="text" placeholder="Search movies and TV" className="rounded px-2 py-1" />
		</li>
		<li className="nav-links px-2 cursor-pointer font-medium text-sm text-white">
            <Link href="signin">Sign In</Link>
		</li>
		
      </ul>

	  {/* this is for if the window is really narrow */}
      {/* <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div> */}

	  {/* i think this is for .... uh ... maybe mobile */}
      {/* {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Navbar;