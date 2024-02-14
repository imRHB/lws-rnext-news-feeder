import { useEffect, useState } from "react";

export default function useNewsQuery(url, type) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchNews = async () => {
            try {
                setIsLoading(true);

                const response = await fetch(url);
                if (!response.ok) {
                    const { detail } = await response.json();
                    throw new Error(detail);
                }
                const data = await response.json();

                if (isMounted) {
                    /* ENDPOINT CHECKING: we are getting the actual data inside RESULT while hitting `/search` endpoint, for `/top-headlines*` getting the actual data inside ARTICLES. that's why I'm storing only actual data array as NEWS */
                    type === "search"
                        ? setNews(data.result)
                        : setNews(data.articles);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error);
                }
            } finally {
                setIsLoading(false);
            }
        };
        fetchNews();

        return () => {
            isMounted = false;
        };
    }, [url, type]);

    return {
        news,
        isLoading,
        error,
    };
}
