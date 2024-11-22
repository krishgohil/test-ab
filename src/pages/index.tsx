import BoardHeader from '@/components/Board/BoardHeader';
import RecordingCard from '@/components/Board/RecordingCard';
import StatusColumn from '@/components/Board/StatusColumn';
import Sidebar from '@/components/Layout/Sidebar';
import React from 'react';

const recordings = {
  open: [
    {
      title: "Task141 - 13 November 2024",
      date: "4h",
      points: 450,
      duration: "13:42",
      type: "Task",
      thumbnail: "/images/1.png"
    },
    {
      title: "Recording - 12 November 2024",
      date: "2d",
      points: 1450,
      duration: "3:45:42",
      type: "Passive",
      thumbnail: "/images/2.png"
    },
    {
      title: "Recording - 12 November 2024",
      date: "2d",
      points: 1450,
      duration: "3:45:42",
      type: "Passive",
      thumbnail: "/images/3.png"
    }
  ],
  pending: [
    {
      title: "Recording - 23 September 2024",
      date: "2d",
      points: 1450,
      duration: "3:45:42",
      type: "Passive",
      thumbnail: "/images/4.png"
    },
    {
      title: "Recording - 12 November 2024",
      date: "2d",
      points: 1450,
      duration: "3:45:42",
      type: "Passive",
      thumbnail: "/images/5.png"
    }
  ],
  rejected: [
    {
      title: "Recording - 12 November 2024",
      date: "2d",
      points: 1450,
      duration: "3:45:42",
      type: "Passive",
      thumbnail: "/images/6.png"
    },
    {
      title: "Recording - 12 November 2024",
      date: "2d",
      points: 1450,
      duration: "3:45:42",
      type: "Passive",
      thumbnail: "/images/7.png"
    }
  ],
  accepted: [
    {
      title: "Recording - 12 November 2024",
      date: "2d",
      points: 1450,
      duration: "3:45:42",
      type: "Passive",
      thumbnail: "/images/8.png"
    },
    {
      title: "Recording - 12 November 2024",
      date: "2d",
      points: 1450,
      duration: "3:45:42",
      type: "Passive",
      thumbnail: "/images/9.png"
    },
    {
      title: "Recording - 12 November 2024",
      date: "2d",
      points: 1450,
      duration: "3:45:42",
      type: "Passive",
      thumbnail: "/images/10.png"
    }
  ]
};

const Home = () => {
  return (
    <div className="flex min-h-screen bg-[#F7F7F7]">
      <div className="fixed h-screen">
        <Sidebar />
      </div>
      <div className="ml-[251px] flex-1 pt-[30px]">
        <main className="bg-white rounded-tl-[32px] border-t border-l">
          <BoardHeader />
          <div className="overflow-x-auto px-6 flex space-x-6 pb-6 no-scrollbar items-start">
            <StatusColumn
              title="Open"
              count={5}
              color="bg-[#79C1F9]"
              subtitle="approve to earn"
            >
              {recordings.open.map((recording, index) => (
                <RecordingCard key={index} {...recording} />
              ))}
            </StatusColumn>
            <StatusColumn
              title="Pending"
              count={3}
              color="bg-[#F4B556]"
            >
              {recordings.pending.map((recording, index) => (
                <RecordingCard key={index} {...recording} />
              ))}
            </StatusColumn>
            <StatusColumn
              title="Rejected"
              count={2}
              color="bg-[#F45656]"
            >
              {recordings.rejected.map((recording, index) => (
                <RecordingCard key={index} {...recording} />
              ))}
            </StatusColumn>
            <StatusColumn
              title="Accepted"
              count={6}
              color="bg-[#6CDDA9]"
            >
              {recordings.accepted.map((recording, index) => (
                <RecordingCard key={index} {...recording} />
              ))}
            </StatusColumn>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;