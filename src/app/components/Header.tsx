import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section className="flex flex-row justify-between px-12 py-10">
      <h1 className="text-5xl tracking-25p w-1/2">Brasil História</h1>
      <nav className="flex w-1/2">
        <ul className="flex  flex-row justify-evenly w-full text-center items-center">
          <Link href="/">
            <li className="text-xl font-bold hover:text-gray-500">HOME</li>
          </Link>
          <Link href="/">
            <li className="text-xl font-bold hover:text-gray-500 ">ARTIGOS</li>
          </Link>
          <Link href="/">
            <li className="text-xl font-bold hover:text-gray-500">SOBRE</li>
          </Link>
          <Link href="/">
            <li className="text-xl font-bold hover:text-gray-500">LINKS</li>
          </Link>
          <Link href="/">
            <li className="text-xl font-bold hover:text-gray-500">VIDEOS</li>
          </Link>
          <Link href="/">
            <li className="text-xl font-bold hover:text-gray-500">EVENTOS</li>
          </Link>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
