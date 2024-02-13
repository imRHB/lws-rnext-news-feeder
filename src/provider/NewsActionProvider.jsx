/* eslint-disable react/prop-types */

import { useState } from "react";

import { NEWS_CATEGORIES } from "../constants";
import { NewsActionContext } from "../context";

export default function NewsActionProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState(undefined);

    return (
        <NewsActionContext.Provider
            value={{
                NEWS_CATEGORIES,
                searchTerm,
                setSearchTerm,
                category,
                setCategory,
            }}
        >
            {children}
        </NewsActionContext.Provider>
    );
}
