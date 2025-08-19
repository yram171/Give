import { useState } from 'react';

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
    <div className="w-full flex flex-col gap-1 cursor-pointer">
      {initialOptions.map((option, index) => {
        const percentage = getPercentage(option.label);

        return (
          <div key={index} 
          className={`relative bg-pollBarGrey cursor-pointer rounded-[0.6rem] ${!hasVoted ? ' hover:bg-pollBarHover' : ''}`}
          onClick={() => handleVote(option.label)}>
            <span className="absolute top-0 left-0 h-full transition-all duration-500 bg-defaultYellow z-1 rounded-[0.6rem]"
            style={{ width: hasVoted ? `${percentage}%` : '0%' }}
            />
            <div
              className="relative font-normal text-black text-[0.8rem] z-2 leading-[3.1] px-8 py-0 cursor-pointer rounded-[0.6rem] flex justify-between items-center p-2"
            >
              <span>{option.label}</span>
              {percentage > 0 && <span>{percentage}%</span>}
            </div>
          </div>
        )
      })}
    </div>
  );
}
