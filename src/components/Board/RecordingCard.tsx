import React from 'react'

interface RecordingCardProps {
    title: string;
    date: string;
    points: number;
    duration: string;
    type: string;
    thumbnail?: string;
}

const RecordingCard = ({ title, date, points, duration, type, thumbnail }: RecordingCardProps) => {
    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-md transition-shadow w-[239px]">
            {thumbnail && (
                <div className="relative rounded-t-2xl h-[156px] overflow-hidden">
                    <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-0.5 rounded text-xs">
                        {duration}
                    </div>
                    <button className="absolute top-2 right-2 bg-black/75 p-1.5 rounded">
                        <img src="/icons/delete.svg" alt="" className="w-4 h-4" />
                    </button>
                </div>
            )}
            <div className="p-3">
                <h4 className="font-medium text-sm mb-2 line-clamp-1">{title}</h4>
                <div className="flex items-center text-xs text-[#8D8D8D] space-x-2">
                    <div className="flex items-center">
                        <img src="/icons/points.svg" alt="" className="w-3 h-3 mr-1 opacity-30" />
                        <span>{points} pts</span>
                    </div>
                    <div className="flex items-center">
                        <img src="/icons/clock.svg" alt="" className="w-3 h-3 mr-1" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center">
                        <img src="/icons/type.svg" alt="" className="w-3 h-3 mr-1" />
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded">{type}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RecordingCard