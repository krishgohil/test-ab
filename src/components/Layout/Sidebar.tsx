import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="w-[219px] pt-[30px] h-screen mx-4 flex flex-col ">
            <div className="flex items-center px-4 mb-8">
                <img src="/logo.png" alt="TraceAI" className="h-10" />
                <span className="ml-2 text-3xl font-medium font-mono">TraceAI</span>
            </div>

            <nav className="space-y-2">
                {[
                    { icon: "/icons/analytics.svg", label: "Analytics" },
                    { icon: "/icons/tasklist.svg", label: "Task List" },
                    { icon: "/icons/myBoard.svg", label: "My Board", active: true },
                    { icon: "/icons/notification.svg", label: "Notifications" },
                    { icon: "/icons/tutorials.svg", label: "Watch Tutorials" },
                    { icon: "/icons/settings.svg", label: "Settings" },
                ].map((item) => (
                    <Link
                        key={item.label}
                        href="#"
                        className={`flex items-center px-4 py-2.5 ${item.active ? 'bg-[#E6FFFF] text-[#00A3B1]' : 'hover:bg-gray-50'
                            }`}
                    >
                        <img src={item.icon} alt="" className="w-5 h-5 mr-3" />
                        <span className="text-sm">{item.label}</span>
                    </Link>
                ))}
            </nav>
            <hr className="my-6 border-gray-200" />

            <button className="mt-6 w-[211px] bg-white rounded-[27px] p-3.5 flex items-center border shadow-sm">
                <div className="w-8 h-8 bg-[#E6FFFF] rounded-lg flex items-center justify-center mr-3">
                    <img src="/icons/passive_mode.svg" alt="" className="w-5 h-5" />
                </div>
                <div className='text-left' >
                    <p className="text-[13px]  text-left mb-1 bg-[rgb(128,240,255,0.54)] px-1 py-0.5 rounded inline-flex">
                        Start Passive Mode
                    </p>
                    <p className="text-xs text-gray-500 text-left px-1 py-0.5">Earn while doing anything on your computer</p>
                </div>
            </button>

            <div className="mt-auto px-4">
                <Link href="#" className="flex items-center py-2.5">
                    <img src="/icons/support.svg" alt="" className="w-5 h-5 mr-3" />
                    <span className="text-sm text-gray-600">Support</span>
                </Link>
                <Link href="#" className="flex items-center py-2.5">
                    <img src="/icons/documentation.svg" alt="" className="w-5 h-5 mr-3" />
                    <span className="text-sm text-gray-600">Documentation</span>
                </Link>
            </div>

            <div className="px-4 py-3 border-t border-gray-200 my-4">
                <Link href="#" className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="/pfp.png" alt="" className="w-8 h-8 rounded-lg mr-3" />
                        <div>
                            <p className="text-sm font-medium bg-[rgb(128,240,255,0.54)] px-1 py-0.5">Amrit Singh</p>
                            <p className="text-xs text-gray-500 px-1 py-0.5">Silver</p>
                        </div>
                    </div>
                    <img src="/icons/right_arrow.svg" alt="" className="w-2 h-2" />
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;