import { useState } from "react";

export default function useNewsAction() {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState(undefined);

    return {
        searchTerm,
        setSearchTerm,
        category,
        setCategory,
    };
}
