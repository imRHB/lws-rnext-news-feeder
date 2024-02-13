import { useEffect, useState } from "react";

export default function useNewsQuery(url, type) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const fetchNews = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Could not fetch");
                }
                const data = await response.json();

                if (isMounted) {
                    /* type checking: cause, we are getting the data inside RESULT while calling search endpoint, other case getting the data inside ARTICLES. directly storing only the data array, that's enough for our case */
                    type === "search"
                        ? setNews(data.result)
                        : setNews(data.articles);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error.message);
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
