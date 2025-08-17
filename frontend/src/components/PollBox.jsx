import React, { useState } from 'react';

export default function PollBox({ initialOptions }) {
  const [votes, setVotes] = useState(
    initialOptions.reduce((acc, option) => {
      acc[option.label] = 0;
      return acc;
    }, {})
  );

  const [totalVotes, setTotalVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (optionLabel) => {
    if (hasVoted) return;
    setVotes((prevVotes) => ({
      ...prevVotes,
      [optionLabel]: prevVotes[optionLabel] + 1,
    }));
    setTotalVotes((prevTotal) => prevTotal + 1);
    setHasVoted(true);
  };

  const getPercentage = (optionLabel) => {
    if (totalVotes === 0) return 0;
    return Math.round((votes[optionLabel] / totalVotes) * 100);
  };

  return (
    <div className="w-full font-[Gothic_A1]">
      {initialOptions.map((option, index) => (
        <div
          key={index}
          className={`mb-1 cursor-pointer ${!hasVoted ? 'hover:bg-[#f2ebd9]' : ''}`}
          onClick={() => handleVote(option.label)}
        >
          <div className="bg-[#fef6e7] h-10 rounded-[10px] relative overflow-hidden">
            <div
              className="bg-[#ffdd4a] h-full rounded-l-[10px] absolute top-0 left-0 transition-all duration-500 z-[1]"
              style={{ width: hasVoted ? `${getPercentage(option.label)}%` : '0%' }}
            />
            <span className="absolute left-5 top-1/2 -translate-y-1/2 font-normal text-black text-xs z-[2]">
              {option.label}
            </span>
            {hasVoted && (
              <span className="absolute right-5 top-1/2 -translate-y-1/2 font-normal text-black text-xs z-[2]">
                {getPercentage(option.label)}%
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
