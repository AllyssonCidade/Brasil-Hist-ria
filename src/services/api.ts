const HOST = process.env.NEXT_PUBLIC_HOST_API;

export interface Article {
  id: number;
  documentId: string;
  title: string;
  content: string;
  publishedAt: string;
  autor: string;
  cover: { url: string };
  comments?: { id: string; content: string; autor: string }[];
}

export type BannerProps = {
  banner: {
    url: string;
  }[];
};

export const fetchArticles = async (): Promise<Article[]> => {
  const response = await fetch(`${HOST}articles`);
  if (!response.ok) {
    throw new Error("Erro ao buscar artigos");
  }
  const data = await response.json();

  return data.data;
};

export const fetchBanner = async (): Promise<BannerProps> => {
  const response = await fetch(`${HOST}banners?populate=*`);

  if (!response.ok) {
    throw new Error("Erro ao buscar banner");
  }
  const data = await response.json();
  return data.data[0];
};

export const fetchVideos = async (): Promise<string[]> => {
  const response = await fetch(`${HOST}videos`);
  if (!response.ok) {
    throw new Error("Erro ao buscar videos");
  }
  const data = await response.json();
  return data.data;
};
