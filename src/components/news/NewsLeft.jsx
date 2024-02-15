/* eslint-disable react/prop-types */

import CoverNews from "./CoverNews";
import NewsItem from "./NewsItem";

export default function NewsLeft({ coverNews, articles }) {
    const imageToShow = articles.length >= 2 && articles[1].urlToImage;

    return (
        <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {coverNews && <CoverNews coverNews={coverNews} />}

            {articles?.map((article) => (
                <NewsItem
                    key={article.title}
                    article={article}
                    imageToShow={imageToShow}
                />
            ))}
        </div>
    );
}
