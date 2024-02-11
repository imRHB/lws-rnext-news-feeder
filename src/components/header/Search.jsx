const magnify = "/assets/icons/search.svg";

export default function Search() {
    return (
        <div className="flex items-center space-x-3 lg:space-x-8">
            <form>
                <div className="flex">
                    <div className="relative overflow-hidden rounded-lg text-gray-500 md:min-w-[380px] lg:min-w-[440px]">
                        <input
                            type="text"
                            // id="search-dropdown"
                            className="z-20 block w-full bg-gray-100 px-4 py-2 pr-10 focus:outline-gray-300 rounded-lg transition"
                            placeholder="Search news"
                            // value={state.searchTerm}
                            // onChange={handleSearchTask}
                            required
                        />
                        <button
                            type="submit"
                            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
                            // onClick={handleSearchTaskButton}
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
