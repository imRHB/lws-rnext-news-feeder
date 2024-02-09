import React from "react";

import NewsLeft from "./NewsLeft";
import NewsRight from "./NewsRight";

export default function NewsBoard() {
    return (
        <main class="my-10 lg:my-14">
            <div class="container mx-auto grid grid-cols-12 gap-8">
                <NewsLeft />
                <NewsRight />
            </div>
        </main>
    );
}
