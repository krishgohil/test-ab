import React from 'react';

const BoardHeader = () => {
    return (
        <div className="">
            <div className="flex items-center text-sm border-b p-6">
                <div className="flex items-center">
                    <img src="/icons/myBoard.svg" alt="" className="w-4 h-4 mr-2" />
                    <span className="text-gray-600">My Board</span>
                </div>
                <img src="/icons/right_arrow.svg" alt="" className="w-3 h-3 mx-4" />
                <span>My Board</span>
                <button className="ml-auto">
                    <img src="/icons/options.svg" alt="" className="h-4" />
                </button>
            </div>

            <div className='p-6' >
                <h1 className="text-2xl font-semibold mb-6">My Board</h1>

                <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg w-fit">
                    {['My Board', 'Library', 'To Do Only', 'Archive'].map((tab) => (
                        <button
                            key={tab}
                            className={`px-4 py-2 rounded-md text-sm ${tab === 'My Board'
                                    ? 'bg-white shadow-sm'
                                    : 'text-gray-600 hover:bg-white/50'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BoardHeader