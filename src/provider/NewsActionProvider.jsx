/* eslint-disable react/prop-types */

import { NEWS_CATEGORIES } from "../constants";
import { NewsActionContext } from "../context";
import useNewsAction from "../hooks/useNewsAction";

export default function NewsActionProvider({ children }) {
    const { category, searchTerm, setCategory, setSearchTerm } =
        useNewsAction();

    return (
        <NewsActionContext.Provider
            value={{
                NEWS_CATEGORIES,
                category,
                searchTerm,
                setCategory,
                setSearchTerm,
            }}
        >
            {children}
        </NewsActionContext.Provider>
    );
}
