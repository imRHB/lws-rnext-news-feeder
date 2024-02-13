import { useContext } from "react";

import { NewsActionContext } from "../../context";
import useDebounce from "../../hooks/useDebounce";

const magnify = "/assets/icons/search.svg";

export default function Search() {
    const { searchTerm, setSearchTerm } = useContext(NewsActionContext);

    const dbQuery = useDebounce((searchValue) => {
        setSearchTerm(searchValue);
    }, 500);

    const handleSearchNews = () => {
        event.preventDefault();

        setSearchTerm(event.target.value);
        dbQuery(event.target.value);
    };

    /* const doSearch = useDebounce(() => {
        fetchData();
    }, 500); */

    /* function handleSearchNews() {
        event.preventDefault();

        const searchValue = event.target.value;
        setSearchTerm(searchValue);
        doSearch(searchValue);
    } */

    function handleSubmit() {
        event.preventDefault();

        // setSearchTerm(event.target.value);
    }

    return (
        <div className="flex items-center space-x-3 lg:space-x-8">
            <form onSubmit={handleSubmit}>
                <div className="flex">
                    <div className="relative overflow-hidden rounded-lg text-gray-500 md:min-w-[380px] lg:min-w-[440px]">
                        <input
                            type="text"
                            className="z-20 block w-full bg-gray-100 px-4 py-2 pr-10 focus:outline-gray-300 rounded-lg transition"
                            placeholder="Search news"
                            value={searchTerm}
                            onChange={handleSearchNews}
                            required
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                        >
                            <img src={magnify} />
                            <span className="sr-only">Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
