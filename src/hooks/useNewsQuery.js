import { useEffect, useState } from "react";

export default function useNewsQuery(url) {
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
                    setNews(data);
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
    }, [url]);

    return {
        news,
        isLoading,
        error,
    };
}

/* 

const fetchNews = async (condUrl) => {
        const response = await fetch(condUrl);
        if (!response.ok) {
            throw new Error("An unknown error occurred while fetching");
        }

        return response.json();
    };

    const fetchNewsConditionally = async () => {
        try {
            setIsLoading(true);
            let data;

            if (!type || !payload) {
                console.log("invalid type");
                throw new Error("Invalid type and payload provided");
            }

            switch (type) {
                case "category":
                    console.log("category:::", type);
                    data = await fetchNews(
                        `${baseUrl}/top-headlines?category=${payload}`
                    );

                    setNews(data?.articles);
                    break;

                case "search":
                    console.log("search:::", type);
                    data = await fetchNews(`${baseUrl}/search?q=${payload}`);

                    setNews(data?.result);
                    break;

                default:
                    console.log("default:::", type);
                    data = await fetchNews(`${baseUrl}/top-headlines`);

                    setNews(data?.articles);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNewsConditionally();
    }, []);

*/
