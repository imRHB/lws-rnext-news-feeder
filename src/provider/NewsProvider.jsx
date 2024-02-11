import React, { useEffect, useState } from "react";

import { NewsContext } from "../context";

export default function NewsProvider({ children }) {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const baseURL = "http://localhost:8000/v2";

    // const url = endpoint ? `${baseURL}${endpoint}` : `${baseURL}/top-headlines`;

    const fetchNews = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(`${baseURL}/top-headlines`);
            if (!response.ok) {
                throw new Error("An error occurred while fetching news");
            }
            const news = await response.json();
            setNews(news);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    console.log(news);

    return (
        <NewsContext.Provider value={{ isLoading, news }}>
            {children}
        </NewsContext.Provider>
    );
}
