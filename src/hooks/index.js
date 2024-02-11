import { useContext } from "react";

import { NewsActionContext, NewsContext } from "../context";

export function useNewsContext() {
    return useContext(NewsContext);
}

export function useNewsActionContext() {
    return useContext(NewsActionContext);
}
