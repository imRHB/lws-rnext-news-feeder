import { useContext } from "react";

import { NewsContext } from "../../context";
import arraySplitter from "../../lib/arraySplitter";
import Message from "../shared/Message";
import NewsItemSkeleton from "../shared/NewsItemSkeleton";
import NewsLeft from "./NewsLeft";
import NewsRight from "./NewsRight";

export default function NewsBoard() {
    const { error, isLoading, news } = useContext(NewsContext);

    const filteredNews = news.filter((item) => item.description !== null);

    const {
        firstItem: specialNews,
        secondArray,
        thirdArray,
    } = arraySplitter(filteredNews);

    let content = null;

    if (isLoading) {
        content = (
            <div className="container mx-auto grid grid-cols-12 gap-8">
                <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <div
                            key={num}
                            className="col-span-12 md:col-span-6 lg:col-span-4"
                        >
                            <NewsItemSkeleton image={num === 2} />
                        </div>
                    ))}
                </div>
                <div className="col-span-12 self-start xl:col-span-4 space-y-6">
                    <NewsItemSkeleton image={true} />
                    <NewsItemSkeleton />
                </div>
            </div>
        );
    }

    if (!isLoading && error) {
        content = (
            <div className="flex justify-center min-h-[30vh]">
                <Message
                    type="error"
                    title="Failed to fetch!"
                    description={
                        error?.message ??
                        "Something went wrong, data fetching failed! Please try again later!"
                    }
                />
            </div>
        );
    }

    if (!isLoading && !error && filteredNews.length <= 0) {
        content = (
            <div className="flex justify-center min-h-[30vh]">
                <Message
                    type="info"
                    title="No news found!"
                    description="We didn't find any news for you!"
                />
            </div>
        );
    }

    if (!isLoading && !error && filteredNews.length > 0) {
        content = (
            <div className="container mx-auto grid grid-cols-12 gap-8">
                <NewsLeft specialNews={specialNews} articles={secondArray} />
                <NewsRight articles={thirdArray} />
            </div>
        );
    }

    return <main className="my-10 lg:my-14">{content}</main>;
}
