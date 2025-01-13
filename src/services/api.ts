const HOST = process.env.NEXT_PUBLIC_HOST_API;

export interface ArticleProps {
  id: string;
  documentId: string;
  title: string;
  content: string;
  publishedAt: string;
  autor: string;
  createdAt: string;
  cover: { url: string };
  comments?: { id: string; content: string; autor: string }[];
}

export interface VideoProps {
  id: number;
  url: string;
  video: [{ url: string }];
}

export type BannerProps = {
  banner: {
    url: string;
  }[];
};
export const fetchArticles = async (
  start: number,
  limit: number
): Promise<ArticleProps[]> => {
  const response = await fetch(
    `${HOST}articles?pagination[start]=${start}&pagination[limit]=${limit}`
  );
  if (!response.ok) {
    throw new Error("Erro ao buscar artigos");
  }
  const data = await response.json();
  return data.data;
};
export const fetchArticle = async (id: string): Promise<ArticleProps[]> => {
  const response = await fetch(`${HOST}article/${id}`);
  if (!response.ok) {
    throw new Error("Erro ao buscar artigo");
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

export const fetchVideos = async (): Promise<VideoProps[]> => {
  const response = await fetch(`${HOST}videos`);
  if (!response.ok) {
    throw new Error("Erro ao buscar videos");
  }
  const data = await response.json();
  return data.data;
};
