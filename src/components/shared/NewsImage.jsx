/* eslint-disable react/prop-types */

export default function NewsImage({ size, urlToImage, source }) {
    return (
        <div
            className={`col-span-12 ${
                size === "lg" ? "lg:col-span-8" : "md:col-span-6 lg:col-span-4"
            }`}
        >
            <img className="w-full" src={urlToImage} alt="thumb" />

            {source?.name && (
                <p className="mt-5 text-base text-[#5C5955]">
                    Source: <span className="italic">{source.name}</span>
                </p>
            )}
        </div>
    );
}
