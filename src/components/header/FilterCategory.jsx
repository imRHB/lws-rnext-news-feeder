import { useNewsActionContext } from "../../hooks";

export default function FilterCategory() {
    const {
        NEWS_CATEGORIES,
        category,
        setCategory,
        searchTerm,
        setSearchTerm,
    } = useNewsActionContext();

    function handleCategory(category) {
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
                        onClick={() => handleCategory(catItem)}
                    >
                        <a
                            href="#"
                            className={`${
                                catItem === category &&
                                !searchTerm &&
                                "text-[#00d991]"
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
