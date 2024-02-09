import React from "react";

export default function NewsItem() {
    return (
        <div className="col-span-12 lg:col-span-4">
            <a href="#">
                <h3 className="mb-2.5 text-2xl font-bold lg:text-[28px]">
                    Cities have stopped being the engines of growth and
                    opportunity they once were
                </h3>
            </a>
            <p className="text-base text-[#5C5955]">
                The pandemic is dealing prodigious blows to cities across the
                country. But the world can&apos;t hope to thrive again if its
                cities don&apos;t—they&apos;re the places that have historically
                supplied the keys for unlocking human potential. Though beset by
                racism and other injustices, cities not only provided shared,
                robust public infrastructure like schools, libraries and transit
                systems, they stirred together vast numbers of people from
                different cultures and classes.
            </p>
            <p className="mt-5 text-base text-[#5C5955]">1 hour ago</p>
        </div>
    );
}
