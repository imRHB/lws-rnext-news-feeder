import React from "react";

const magnify = "/assets/icons/search.svg";

export default function Search() {
    return (
        <div className="flex items-center space-x-3 lg:space-x-8">
            <img src={magnify} />
        </div>
    );
}
