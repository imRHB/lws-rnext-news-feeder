/* eslint-disable react/prop-types */

import { BiError, BiInfoCircle } from "react-icons/bi";

export default function Message({ type, title, description }) {
    return (
        <div className="p-4 flex gap-4">
            {type === "error" ? (
                <BiError size={36} color="#ff0000" />
            ) : (
                <BiInfoCircle size={36} color="#8a2be2" />
            )}

            <div className="max-w-md">
                <h3 className="text-4xl font-bold text-zinc-700">{title}</h3>
                <p className="text-xl font-semibold text-zinc-600">
                    {description}
                </p>
            </div>
        </div>
    );
}
