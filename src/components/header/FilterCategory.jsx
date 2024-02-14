import { useContext } from "react";

import { NewsActionContext } from "../../context";

export default function FilterCategory() {
    const {
        NEWS_CATEGORIES,
        category,
        setCategory,
        searchTerm,
        setSearchTerm,
    } = useContext(NewsActionContext);

    function handleCategories(category) {
        setSearchTerm("");
        setCategory(category);
    }

    return (
        <div className="container mx-auto mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                {NEWS_CATEGORIES.map((catItem) => (
                    <li
                        key={catItem}
                        className="capitalize"
                        onClick={() => handleCategories(catItem)}
                    >
                        <a
                            href="#"
                            className={`${
                                catItem === category &&
                                !searchTerm &&
                                "text-green-500"
                            }`}
                        >
                            {catItem}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
