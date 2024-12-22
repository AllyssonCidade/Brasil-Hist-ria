/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useArticleContext } from "../context/articleContext";
const formatDate = (dateString: string) => {
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  // Cria uma data a partir da string no formato ISO 8601
  const date = new Date(dateString);

  // Extrai o dia, mês e ano
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Retorna a data formatada
  return `${day < 10 ? "0" + day : day} de ${month} de ${year}`;
};

function Articles() {
  const { articles } = useArticleContext();
  const HOST_IMG = process.env.NEXT_PUBLIC_HOST_IMG_API;
  return (
    <section className="flex flex-col gap-10 px-4 mt-4 pb-4">
      <div className="w-full h-px bg-black" />
      <h3 className="text-center text-3xl tracking-25p -mt-4">Artigos</h3>
      <div className="grid gap-10 justify-center grid-cols-1 md:grid-cols-2 md:px-16 xl:px-48 ">
        {articles.map((article) => (
          <div key={article.id} className="w-full justify-between">
            <div className="w-12/12 mx-auto h-64 relative">
              <img
                src={`${HOST_IMG}${article?.cover?.url.replace(/\s.*$/, "")}`}
                alt={article.title}
                className="object-cover w-full h-full"
              />
            </div>
            <p className="text-xs mt-2">
              {formatDate(article.publishedAt)} | Por: {article.autor}
            </p>
            <h3 className="text-xl font-medium">{article.title}</h3>
          </div>
        ))}
      </div>
      <button className="lg:text-2xl mt-4 self-center font-medium bg-neutral-300 p-1 px-4 shadow-lg">
        Ver todos
      </button>
    </section>
  );
}

export default Articles;
