/* eslint-disable react/prop-types */

import { NewsContext } from "../context";
import useNewsQuery from "../hooks/useNewsQuery";

export default function NewsProvider({ children }) {
    const { error, isLoading, news } = useNewsQuery();

    return (
        <NewsContext.Provider value={{ error, isLoading, news }}>
            {children}
        </NewsContext.Provider>
    );
}
