"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchArticles, Article } from "@/services/api";

interface ArticleContextType {
  articles: Article[];
  loading: boolean;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

interface ArticleProviderProps {
  children: ReactNode;
}

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles();
        setArticles(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao artigos:", error);
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  return (
    <ArticleContext.Provider value={{ articles, loading }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error(
      "useArticleContext deve ser usado dentro de um ArticleProvider"
    );
  }
  return context;
};
