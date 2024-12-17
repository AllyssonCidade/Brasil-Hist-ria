import Link from "next/link";
import React from "react";

const footerHeader = [
  {
    id: 1,
    title: "HISTÓRIA",
  },
  {
    id: 2,
    title: "BRASIL",
  },
  {
    id: 3,
    title: "CRIATIVDADE",
  },
  {
    id: 4,
    title: "ESTUDO",
  },
  {
    id: 5,
    title: "ENEM",
  },
  {
    id: 6,
    title: "CONCURSO",
  },
  {
    id: 7,
    title: "PRODUTO DIGITAL",
  },
  {
    id: 8,
    title: "MUDANÇA DE VIDA",
  },
  {
    id: 9,
    title: "CONHECIMENTO",
  },
  {
    id: 10,
    title: "ESTRATÉGIA",
  },
  {
    id: 11,
    title: "PASSADO",
  },
  {
    id: 12,
    title: "ARTIGOS",
  },
  {
    id: 13,
    title: "ARTIGOS",
  },
  {
    id: 14,
    title: "ARTIGOS",
  },
  {
    id: 15,
    title: "ARTIGOS",
  },
];
function Footer() {
  return (
    <section className="w-full overflow-hidden pt-4 h-max bg-black justify-around flex flex-col items-center gap-8">
      <ul>
        <li className="flex flex-row w-max gap-2 overflow-hidden">
          {footerHeader.map((item) =>
            item.id % 2 === 0 ? (
              <p
                key={item.id}
                className="flex text-white font-semibold text-sm md:text-base"
              >
                {item.title}
              </p>
            ) : (
              <p key={item.id} className="flex text-white">
                {item.title}
              </p>
            )
          )}
        </li>
      </ul>
      <div className="flex flex-col gap-2 w-full text-center justify-center px-12">
        <h3 className="text-2xl text-white text-center sm400:text-lg w-full tracking-25p lg:text-4xl sm:w-full sm:text-2xl">
          BRASIL HISTÓRIA
        </h3>
        <div>
          <p className="text-white">
            Continue nos acompanhando e faça parte dessa jornada pela história
            do nosso país.
          </p>
          <p className="text-white">Até a próxima!</p>
        </div>
      </div>
      <div className="flex flex-row text-white justify-center gap-6 w-2/12 self-center">
        <Link href="/">Facebook</Link>
        <Link href="/">LinkedIn</Link>
        <Link href="/">X</Link>
      </div>
      <p className="text-white text-center text-xs justify-end ">
        © 2024 Brasil História- Todos os Direitos Reservados
      </p>
    </section>
  );
}

export default Footer;
