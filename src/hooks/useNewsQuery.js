import { useEffect, useState } from "react";

export default function useNewsQuery(category) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const baseUrl = "http://localhost:8000/v2";
    const url = !category
        ? `${baseUrl}/top-headlines`
        : `${baseUrl}/top-headlines?category=${category}`;

    const fetchNews = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(url);
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
