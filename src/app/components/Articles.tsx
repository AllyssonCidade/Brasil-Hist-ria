"use client";
import React, { useState } from "react";
import { useArticleContext } from "../context/articleContext";

import CardArticle from "./CardArticle";

const HOST = process.env.NEXT_PUBLIC_HOST_IMG_API;

function Articles() {
  const { articles, loadMoreArticles, loading } = useArticleContext();
  const [limitAtual, setLimitAtual] = useState(6);

  async function verMais() {
    await loadMoreArticles(0, limitAtual + 6);
    setLimitAtual(limitAtual + 6);
  }

  return (
    <section className="flex flex-col gap-10 px-4 mt-4 pb-4">
      <div className="w-full h-px bg-black" />
      <h3 className="text-center text-3xl tracking-25p -mt-4">Artigos</h3>
      <div className="grid gap-10 justify-center grid-cols-1 md:grid-cols-2 md:px-16 xl:px-48 ">
        {articles.map((article) => (
          <CardArticle
            key={article.id}
            id={article.id}
            url={`${HOST}${article?.cover?.url}`}
            title={article.title}
            autor={article.autor}
            publishedAt={article.publishedAt}
          />
        ))}
      </div>
      <button
        onClick={verMais}
        className="lg:text-2xl mt-4 self-center font-medium bg-neutral-300 p-1 px-4 shadow-lg"
      >
        {loading ? <p>Carregando...</p> : <p>Ver mais</p>}
      </button>
    </section>
  );
}

export default Articles;
