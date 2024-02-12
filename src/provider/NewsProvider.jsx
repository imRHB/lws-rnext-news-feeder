/* eslint-disable react/prop-types */

import { NewsContext } from "../context";

export default function NewsProvider({ children }) {
    return <NewsContext.Provider value={{}}>{children}</NewsContext.Provider>;
}
