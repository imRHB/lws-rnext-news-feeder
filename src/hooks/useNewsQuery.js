import { useEffect, useState } from "react";

export default function useNewsQuery(category, searchTerm = "honda") {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const baseUrl = "http://localhost:8000/v2";
    const url = !category
        ? `${baseUrl}/top-headlines`
        : `${baseUrl}/top-headlines?category=${category}`;

    const url2 =
        category && !searchTerm
            ? `${baseUrl}/top-headlines?category=${category}`
            : !category && searchTerm
            ? `${baseUrl}/search?q=${searchTerm}`
            : `${baseUrl}/top-headlines`;

    const fetchNews = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(url2);
            if (!response.ok) {
                throw new Error("An unknown error occurred while fetching");
            }
            const newsData = await response.json();
            setNews(newsData);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return {
        error,
        news,
        isLoading,
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
