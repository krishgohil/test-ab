import React from 'react'

interface StatusColumnProps {
    title: string;
    count: number;
    color: string;
    subtitle?: string;
    children?: React.ReactNode;
  }
  
  const StatusColumn = ({ title, count, color, subtitle, children }: StatusColumnProps) => {
    return (
      <div className="min-w-[262px] bg-[#F7F7F7] p-4 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className={`w-[5px] h-[25px] ${color} rounded-full mr-2`}></div>
            <h3 className="text-sm font-medium">
              {title} {subtitle && <span className="text-gray-500">({subtitle})</span>}
            </h3>
            <span className="ml-2 bg-gray-100 px-2 py-0.5 rounded-full text-xs">
              {count}
            </span>
          </div>
          <button className="text-gray-400 hover:text-gray-600 p-1">
            <img src="/icons/3dash.svg" alt="" className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    );
  };

export default StatusColumn