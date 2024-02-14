import { useNewsActionContext } from "../../hooks";
import useDebounce from "../../hooks/useDebounce";

const magnify = "/assets/icons/search.svg";

export default function Search() {
    const { setSearchTerm } = useNewsActionContext();

    const debouncedSetSearchTerm = useDebounce((searchValue) => {
        setSearchTerm(searchValue);
    }, 500);

    const handleSearch = (evt) => {
        debouncedSetSearchTerm(evt.target.value);
    };

    return (
        <div className="relative md:min-w-[300px]">
            <div className="absolute inset-y-0 left-0 p-3 flex items-center pointer-events-none">
                <img src={magnify} />
                <span className="sr-only">Search</span>
            </div>

            <input
                type="text"
                name="search"
                placeholder="Search news"
                className="block w-full bg-gray-50 text-gray-600 px-4 py-3 pl-12 focus:outline-gray-200 focus:bg-transparent rounded-lg transition"
                onChange={handleSearch}
                required
            />
        </div>
    );
}
