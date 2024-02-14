/* eslint-disable react/prop-types */

export default function NewsItemSkeleton({ image = false }) {
    return (
        <>
            {image ? (
                <div className="w-full mx-auto">
                    <div className="flex items-center justify-center w-full h-52 bg-slate-200 rounded">
                        <svg
                            className="w-10 h-10 text-slate-100"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                        >
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                        </svg>
                    </div>
                </div>
            ) : (
                <div className="border border-gray-50 p-6 w-full mx-auto">
                    <div className="animate-pulse flex space-x-4">
                        <div className="flex-1 space-y-4 py-1">
                            <div className="h-6 bg-slate-200 rounded-full" />
                            <div className="h-6 w-2/3 bg-slate-200 rounded-full" />
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-4 bg-slate-200 rounded-full col-span-2" />
                                    <div className="h-4 bg-slate-200 rounded-full col-span-1" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-4 bg-slate-200 rounded-full" />
                                    <div className="h-4 bg-slate-200 rounded-full col-span-2" />
                                </div>
                                <div className="h-4 bg-slate-200 w-10/12 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
