/* eslint-disable react/prop-types */

import React from "react";
import NewsImage from "../shared/NewsImage";
import CoverNews from "./CoverNews";
import NewsItem from "./NewsItem";

export default function NewsLeft({ coverNews, articles }) {
    /* checking the image that exist below of the cover section */
    const imageToShow = articles.length >= 1 && articles[0].urlToImage;

    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {coverNews && <CoverNews coverNews={coverNews} />}

            {articles?.map((article) => (
                <React.Fragment key={article.title}>
                    <NewsItem article={article} />

                    {/* rendering only image, if the urlToImage is matched with imageToShow */}
                    {imageToShow && imageToShow === article.urlToImage && (
                        <NewsImage urlToImage={imageToShow} />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}
