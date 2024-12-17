import React from "react";
import ArticlesArray from "../_data/articleMockup.json";
import Image from "next/image";

export interface ArticleType {
  id: number;
  capa: string;
  data: string;
  autor: string;
  titulo: string;
  texto: string;
}
const articles: ArticleType[] = ArticlesArray;

function Articles() {
  return (
    <section className="flex flex-col gap-10 px-4 mt-4 pb-4">
      <div className="w-full h-px bg-black" />
      <h3 className="text-center text-3xl tracking-25p -mt-4">Artigos</h3>
      <div className="grid gap-10 justify-center grid-cols-1 md:grid-cols-2 md:px-16 xl:px-48 ">
        {articles.map((article) => (
          <div key={article.id} className="w-full justify-between">
            <div className="w-12/12 mx-auto h-64 relative">
              <Image src={article.capa} alt={article.titulo} fill />
            </div>
            <p className="text-xs mt-2">
              {article.data} | Por: {article.autor}
            </p>
            <h3 className="text-xl font-medium">{article.titulo}</h3>
          </div>
        ))}
        {articles.map((article) => (
          <div key={article.id} className="w-full justify-between">
            <div className="w-12/12 mx-auto h-64 relative">
              <Image src={article.capa} alt={article.titulo} fill />
            </div>
            <p className="text-xs mt-2">
              {article.data} | Por: {article.autor}
            </p>
            <h3 className="text-xl font-medium">{article.titulo}</h3>
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
