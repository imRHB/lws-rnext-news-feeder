/* eslint-disable react/prop-types */

import { NewsContext } from "../context";
import { useNewsActionContext } from "../hooks";
import useNewsQuery from "../hooks/useNewsQuery";

export default function NewsProvider({ children }) {
    const { category, searchTerm } = useNewsActionContext();

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
