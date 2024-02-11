/* eslint-disable react/prop-types */

import getDate from "../../lib/getDate";

export default function NewsItem({ article }) {
    const randomInt = Math.round(Math.random());

    let { author, description, publishedAt, source, title, urlToImage } =
        article || {};

    return (
        <>
            {randomInt === 1 ? (
                <div className="col-span-12 grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-4">
                        <a href="#">
                            <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                                {title}
                            </h3>
                        </a>
                        <p className="text-base text-[#5C5955]">
                            {description}
                        </p>
                        <div className="flex justify-between">
                            <p className="mt-5 text-base text-[#5C5955]">
                                {getDate(publishedAt)}
                            </p>
                            <p className="mt-5 text-base text-[#5C5955]">
                                <span className="italic font-semibold">
                                    By{" "}
                                </span>
                                {author}
                            </p>
                        </div>
                    </div>

                    {urlToImage && (
                        <div className="col-span-12 lg:col-span-8">
                            <img
                                className="w-full"
                                src={urlToImage}
                                alt="thumb"
                            />
                            {source.name && (
                                <p className="mt-5 text-base text-[#5C5955]">
                                    <span className="italic font-semibold">
                                        Source:{" "}
                                    </span>
                                    {source.name}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            ) : (
                <div className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8">
                    <div className="col-span-12 md:col-span-6">
                        <a href="">
                            <h3 className="mb-2.5 text-xl font-bold lg:text-2xl">
                                {title}
                            </h3>
                        </a>
                        <p className="text-base text-[#292219]">
                            {description}
                        </p>
                        <p className="mt-5 text-base text-[#5C5955]">
                            {getDate(publishedAt)}
                        </p>
                    </div>

                    {urlToImage && (
                        <div className="col-span-12 md:col-span-6">
                            <img
                                className="w-full"
                                src={urlToImage}
                                alt="thumb"
                            />
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
