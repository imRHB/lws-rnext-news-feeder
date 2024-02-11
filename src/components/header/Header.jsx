import Logo from "../shared/Logo";
import Date from "./Date";
import FilterCategory from "./FilterCategory";
import Search from "./Search";

export default function Header() {
    return (
        <nav className="border-b border-black py-6 md:py-8">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
                <Date />
                <Logo />
                <Search />
            </div>

            <FilterCategory />
        </nav>
    );
}
