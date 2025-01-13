"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchArticles, ArticleProps } from "@/services/api";

interface ArticleContextType {
  articles: ArticleProps[];
  loading: boolean;
  loadMoreArticles: (start: number, limit: number) => void;
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

interface ArticleProviderProps {
  children: ReactNode;
}

export const ArticleProvider = ({ children }: ArticleProviderProps) => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchArticles(0, 5);
        setArticles(data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao artigos:", error);
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  const loadMoreArticles = async (start: number, limit: number) => {
    try {
      setLoading(true);
      const data = await fetchArticles(start, limit);
      setArticles(data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao artigos:", error);
      setLoading(false);
    }
  };

  return (
    <ArticleContext.Provider value={{ articles, loading, loadMoreArticles }}>
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
