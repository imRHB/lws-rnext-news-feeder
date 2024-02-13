/* eslint-disable react/prop-types */

import { useContext } from "react";

import { NewsActionContext, NewsContext } from "../context";
import useNewsQuery from "../hooks/useNewsQuery";

export default function NewsProvider({ children }) {
    const { category, searchTerm } = useContext(NewsActionContext);

    const url = searchTerm
        ? `${import.meta.env.VITE_BASE_API_URL}/search?q=${searchTerm}`
        : category
        ? `${
              import.meta.env.VITE_BASE_API_URL
          }/top-headlines?category=${category}`
        : `${import.meta.env.VITE_BASE_API_URL}/top-headlines`;

    const { error, isLoading, news } = useNewsQuery(
        url,
        searchTerm ? "search" : category ? "category" : null
    );

    return (
        <NewsContext.Provider value={{ error, isLoading, news }}>
            {children}
        </NewsContext.Provider>
    );
}
