/* eslint-disable react/prop-types */

import getDate from "../../lib/getDate";
import NewsImage from "../shared/NewsImage";

export default function CoverNews({ coverNews }) {
    const { description, publishedAt, source, title, urlToImage } =
        coverNews || {};

    return (
        <div className="col-span-12 grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-4">
                <a href="#">
                    <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                        {title}
                    </h3>
                </a>
                <p className="text-base text-[#5C5955]">{description}</p>
                <div className="flex">
                    <p className="mt-5 text-base text-[#5C5955]">
                        {getDate(publishedAt)}
                    </p>
                </div>
            </div>

            {urlToImage && (
                <NewsImage size="lg" urlToImage={urlToImage} source={source} />
            )}
        </div>
    );
}
