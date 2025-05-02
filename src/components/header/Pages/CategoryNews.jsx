import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../HomeLayout/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const data = useLoaderData();
  // console.log(data)
  const { id } = useParams();
  useEffect(() => {
    if (id == 0) {
      setCategoryNews(data);
      return;
    } else if (id == 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick === true
      );
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, data]);
  return (
    <>
      <div className=" text-center font-bold">
        Total {categoryNews.length} news found
      </div>
      <div className=" grid grid-cols-1">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </>
  );
};

export default CategoryNews;
