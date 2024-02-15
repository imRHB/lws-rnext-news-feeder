/* eslint-disable react/prop-types */

import arraySplitter from "../../lib/arraySplitter";
import NewsImage from "../shared/NewsImage";
import NewsItem from "./NewsItem";

export default function NewsRight({ articles }) {
    const { firstItem, secondArray, thirdArray } = arraySplitter(articles);

    return (
        <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6">
                {/* removed divide class from the upper div to NewsItem to make dynamic */}
                <div className="col-span-12 mb-6 md:col-span-8 space-y-6">
                    {/* if firstItem exists, then rendering only image on the right-top side image like as template */}
                    {firstItem && (
                        <NewsImage urlToImage={firstItem.urlToImage} />
                    )}
                </div>

                {/* except coverNews, rest of the news are rendering */}
                {[firstItem, ...secondArray, ...thirdArray].map((article) => (
                    <NewsItem
                        key={article.title}
                        article={article}
                        border={article.urlToImage !== firstItem.urlToImage}
                    />
                ))}
            </div>
        </div>
    );
}
