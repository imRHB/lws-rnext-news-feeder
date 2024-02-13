import { useContext } from "react";

import { NewsActionContext } from "../../context";

export default function FilterCategory() {
    const { NEWS_CATEGORIES, setCategory, setSearchTerm } =
        useContext(NewsActionContext);

    function handleCategories(category) {
        setSearchTerm("");
        setCategory(category);
    }

    return (
        <div className="container mx-auto mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                {NEWS_CATEGORIES.map((category) => (
                    <li
                        key={category}
                        className="capitalize"
                        onClick={() => handleCategories(category)}
                    >
                        <a href="#">{category}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
