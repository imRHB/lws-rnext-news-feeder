/* eslint-disable react/prop-types */

import arraySplitter from "../../lib/arraySplitter";
import CoverNews from "./CoverNews";
import NewsItem from "./NewsItem";

export default function NewsRight({ articles }) {
    const { firstItem, secondArray, thirdArray } = arraySplitter(articles);

    return (
        <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
                <div className="col-span-12 mb-6 md:col-span-8 space-y-6">
                    {firstItem && (
                        <img
                            className="w-full"
                            src={firstItem.urlToImage}
                            alt="thumb"
                        />
                    )}

                    {firstItem && (
                        <CoverNews coverNews={firstItem} image={false} />
                    )}
                </div>

                {[...secondArray, ...thirdArray].map((article) => (
                    <NewsItem key={article.title} article={article} />
                ))}
            </div>
        </div>
    );
}
