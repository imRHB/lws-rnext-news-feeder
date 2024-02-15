/* eslint-disable react/prop-types */

import getDate from "../../lib/getDate";

export default function CoverNews({ coverNews, image = true }) {
    const { description, publishedAt, source, title, urlToImage } =
        coverNews || {};

    return (
        <div className="col-span-12 grid grid-cols-12 gap-4">
            <div className={`col-span-12 ${image && "lg:col-span-4"}`}>
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

            {image && urlToImage && (
                <div className="col-span-12 lg:col-span-8">
                    <img className="w-full" src={urlToImage} alt="thumb" />
                    {source?.name && (
                        <p className="mt-5 text-base text-[#5C5955]">
                            Source:{" "}
                            <span className="italic">{source.name}</span>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}
