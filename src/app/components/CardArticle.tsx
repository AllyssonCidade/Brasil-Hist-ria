/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/services/formatDate";
import Link from "next/link";
import React from "react";

interface cardProps {
  id?: string;
  url?: string;
  title?: string;
  autor?: string;
  publishedAt?: string;
}
function CardArticle({ id, url, title, autor, publishedAt }: cardProps) {
  return (
    <Link
      key={id}
      href={`/articles/${id}`}
      className="w-full justify-between pressed:bg-slate-900 pressed:text-white"
    >
      <div className="w-12/12 mx-auto h-64 relative">
        <img src={url} alt={title} className="object-cover w-full h-full" />
      </div>
      <p className="text-xs mt-2">
        {publishedAt && formatDate(publishedAt)} | Por: {autor}
      </p>
      <h3 className="text-xl font-medium">{title}</h3>
    </Link>
  );
}

export default CardArticle;
