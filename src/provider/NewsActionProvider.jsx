/* eslint-disable react/prop-types */

import { NEWS_CATEGORIES } from "../constants";
import { NewsActionContext } from "../context";

export default function NewsActionProvider({ children }) {
    return (
        <NewsActionContext.Provider
            value={{
                NEWS_CATEGORIES,
            }}
        >
            {children}
        </NewsActionContext.Provider>
    );
}
