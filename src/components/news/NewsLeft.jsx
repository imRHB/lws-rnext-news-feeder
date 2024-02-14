/* eslint-disable react/prop-types */

import React from "react";

import NewsItem from "./NewsItem";
import SpecialNews from "./SpecialNews";

export default function NewsLeft({ specialNews, articles }) {
    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {specialNews && <SpecialNews specialNews={specialNews} />}

            {articles?.map((article) => (
                <React.Fragment key={article.title}>
                    {article.description && <NewsItem article={article} />}
                </React.Fragment>
            ))}
        </div>
    );
}
