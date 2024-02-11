import { useState } from "react";

import { NEWS_CATEGORIES } from "../../constants";
import useNewsQuery from "../../hooks/useNewsQuery";

export default function FilterCategory() {
    const [category, setCategory] = useState(undefined);

    useNewsQuery(category);

    return (
        <div className="container mx-auto mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold lg:text-base">
                {NEWS_CATEGORIES.map((category) => (
                    <li
                        key={category}
                        className="capitalize"
                        onClick={() => setCategory(category)}
                    >
                        <a href="#">{category}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
