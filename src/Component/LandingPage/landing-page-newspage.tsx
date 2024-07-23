"use client"

import React, { useEffect, useState } from 'react';
import NewsCard from './landing-page-newscard';

interface NewsItem {
  image: string;
  title: string;
  highlight: string;
}

const NewsPage = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Fetch data from the database
    fetch('/api/news')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl text-[#1A4D2E] font-bold text-center mb-8">Berita Utama</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            highlight={item.highlight}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;