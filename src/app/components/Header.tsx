"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onPressMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="flex sm400:py-2 sm400:px-6 flex-row justify-between px-10 py-4">
      <h1 className="text-2xl sm400:text-lg w-11/12 tracking-25p lg:text-4xl sm:w-full sm:text-5xl">
        BRASIL HISTÓRIA
      </h1>
      {/* Menu hambúrguer */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => onPressMenu()} className="text-xl">
          <FaBars className="w-6 h-6 text-gray-500" />
        </button>
      </div>
      {/* Side Bar vinda do Menu Hambrguer */}
      {isMenuOpen ? (
        <div className="py-12 px-12 absolute h-full -mt-16 w-1/2 right-0 bg-white flex flex-col items-center">
          {/* Botão para fechar o menu */}
          <button
            onClick={() => onPressMenu()}
            className="absolute top-20 right-12"
          >
            {/* ICONE DO HAMBURGUER */}
            <FaTimes className="w-6 h-6 text-gray-500" />
          </button>

          {/* Navegação */}
          <nav className="flex flex-col justify-evenly h-full w-full">
            <ul className="flex flex-col items-start gap-6">
              <Link href="/">
                <li className="text-base font-bold hover:text-gray-500">
                  ARTIGOS
                </li>
              </Link>
              <Link href="/">
                <li className="text-base font-bold hover:text-gray-500">
                  SOBRE
                </li>
              </Link>
              <Link href="/">
                <li className="text-base font-bold hover:text-gray-500">
                  LINKS
                </li>
              </Link>
              <Link href="/">
                <li className="text-base font-bold hover:text-gray-500">
                  VIDEOS
                </li>
              </Link>
              <Link href="/">
                <li className="text-base font-bold hover:text-gray-500">
                  EVENTOS
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      ) : null}
      {/* NAV DE DESKTOP */}
      <nav className="hidden lg:block lg:w-5/6 w-full items-center text-center">
        <ul className="w-full h-full items-center text-center">
          <li className=" flex w-full h-full flex-row justify-evenly lg:justify-between text-center items-center">
            <Link href="/">
              <p className="text-base font-bold hover:text-gray-500 ">
                ARTIGOS
              </p>
            </Link>
            <Link href="/">
              <p className="text-base font-bold hover:text-gray-500 ">SOBRE</p>
            </Link>
            <Link href="/">
              <p className="text-base font-bold hover:text-gray-500 ">LINKS</p>
            </Link>
            <Link href="/">
              <p className="text-base font-bold hover:text-gray-500 ">VIDEOS</p>
            </Link>
            <Link href="/">
              <p className="text-base font-bold hover:text-gray-500 ">
                EVENTOS
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;
