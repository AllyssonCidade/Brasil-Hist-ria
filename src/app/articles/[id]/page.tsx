/* eslint-disable @next/next/no-img-element */
"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Newsletter from "@/app/components/Newsletter";
import { useArticleContext } from "@/app/context/articleContext";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { tempoLeitura } from "@/services/tempoLeitura";
import { formatDate } from "@/services/formatDate";
import CardArticle from "@/app/components/CardArticle";
interface ArticleProps {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  autor?: string;
  cover?: { url: string };
  url?: string;
  comments?: { id: string; content: string; autor: string }[];
}

// USAR HOST EM AMBIENTE DE DESENVOLVIMENTO
//não sei por que está fazendo isso, mas funciona(antes de subir remova a variavel host do <img> e comente esta variavel abaixo deste comentário)
//em desenvolvimento use uma variavel HOST pegando o .env do localhost e coloque antes das imagens
const HOST = process.env.NEXT_PUBLIC_HOST_IMG_API;
export default function Article() {
  const { articles } = useArticleContext();
  const { id } = useParams();
  const [recommendedArticles, setRecommendedArticles] = useState<
    ArticleProps[]
  >([]);

  const customRenderers = {
    img: ({
      src,
      alt,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) => (
      <>
        <img
          src={src}
          alt={alt}
          {...props}
          style={{
            width: "90%",
            margin: "0 auto",
            display: "block",
            marginBottom: "0",
          }}
        />
        {alt && <div className="text-sm text-gray-500 mt-2">{alt}</div>}
      </>
    ),
    video: ({ src, ...props }: React.ImgHTMLAttributes<HTMLVideoElement>) => (
      <video
        src={src}
        {...props}
        style={{ width: "90%", margin: "0 auto", display: "block" }}
        controls
      />
    ),
  };

  useEffect(() => {
    if (!id || Array.isArray(id)) {
      return;
    }

    const article = articles?.find(
      (article) => parseInt(article.id) === parseInt(id)
    );

    if (!article) {
      return;
    }

    if (articles?.length > 0) {
      const filteredArticles = articles
        .filter((p) => p.id !== article.id)
        .sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        )
        .slice(0, 4);
      setRecommendedArticles(filteredArticles);
    }
  }, [id, articles]);

  if (!id || Array.isArray(id)) {
    return <p>Invalid article id.</p>;
  }

  const article = articles?.find(
    (article) => parseInt(article.id) === parseInt(id)
  );

  if (!article) {
    return <p>Carregando...</p>;
  }

  const palavras = article?.content?.split(" ");
  const tempoDeLeitura = tempoLeitura(palavras);

  return (
    <div>
      <Header />
      <div className="flex relative flex-row w-full h-32 md:h-56 lg:h-72">
        <img
          src={HOST + article.cover.url}
          alt={article.title}
          className="w-full h-full opacity-60 relative"
        />
        <h1 className="absolute bottom-3 font-bold text-center w-full md:text-2xl">
          {article.title}
        </h1>
      </div>
      <div className="flex flex-row mb-2 md:mb-4 border-b-2 px-2 md:px-10 py-2">
        <div className="w-10 h-10 rounded-full bg-black" />
        <div className="flex flex-col">
          <p className="text-sm md:text-base ml-2 md:ml-4 font-bold tracking-widest">
            {article.autor}
          </p>
          <p className="text-sm md:text-base ml-2 md:ml-4 ">
            {formatDate(article.createdAt)} - {tempoDeLeitura} min de leitura
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Markdown
          rehypePlugins={[rehypeRaw]}
          className="text-center justify-center w-11/12 md:w-1/2 items-center space-y-6 mt-6 md:mt-16 mb-16 "
          components={customRenderers}
        >
          {article.content}
        </Markdown>
      </div>
      <div className="flex flex-row w-full m-auto items-center">
        <div className="w-full h-px bg-black"></div>
        <img
          src="/images/olhos.png"
          alt="icone de olhos"
          className="w-12 h-12"
        />
        <div className="w-full h-px bg-black"></div>
      </div>
      <p className="text-center text-2xl md:text-2xl mt-2 mb-6 md:mt-8 md:mb-10">
        VEJA TAMBÉM
      </p>

      <ul className="w-11/12 md:w-4/5 m-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {recommendedArticles.map((article) => (
          <CardArticle
            key={article.id}
            id={article.id}
            title={article.title}
            url={`${HOST}${article?.cover?.url}`}
            autor={article.autor}
          />
        ))}
      </ul>
      <Newsletter />
      <Footer />
    </div>
  );
}
