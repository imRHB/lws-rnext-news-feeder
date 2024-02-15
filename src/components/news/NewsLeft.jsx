/* eslint-disable react/prop-types */

import React from "react";

import CoverNews from "./CoverNews";
import NewsItem from "./NewsItem";

export default function NewsLeft({ coverNews, articles }) {
    const imageToShow = articles.length >= 2 && articles[1].urlToImage;

    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {coverNews && <CoverNews coverNews={coverNews} />}

            {articles?.map((article) => (
                <React.Fragment key={article.title}>
                    {article.description && (
                        <NewsItem article={article} imageToShow={imageToShow} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
