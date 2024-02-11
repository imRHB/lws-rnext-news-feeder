import useNewsQuery from "../../hooks/useNewsQuery";
import NewsLeft from "./NewsLeft";
import NewsRight from "./NewsRight";

export default function NewsBoard() {
    const { isLoading, news } = useNewsQuery();

    return (
        <main className="my-10 lg:my-14">
            {isLoading ? (
                <div className="container mx-auto">
                    <p className="text-center">fetching news ...</p>
                </div>
            ) : (
                <div className="container mx-auto grid grid-cols-12 gap-8">
                    <NewsLeft articles={news.articles} />
                    <NewsRight />
                </div>
            )}
        </main>
    );
}
