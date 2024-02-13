/* eslint-disable react/prop-types */

import getDate from "../../lib/getDate";

export default function NewsItemRight({ article }) {
    const { title, description, publishedAt } = article || {};

    return (
        <div className="col-span-12 md:col-span-8">
            <div className="col-span-12 md:col-span-4">
                <a href="#">
                    <h3 className="mb-2.5 text-xl font-bold lg:text-[20px]">
                        {title}
                    </h3>
                </a>
                <p className="text-base text-[#292219]">{description}</p>
                <p className="mt-5 text-base text-[#94908C]">
                    {getDate(publishedAt)}
                </p>
            </div>
        </div>
    );
}
