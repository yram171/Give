import React, { useState } from 'react';
import './PollOnPost.css';

const PollOnPost = ({ initialOptions }) => {
  const [votes, setVotes] = useState(
    initialOptions.reduce((acc, option) => {
      acc[option.label] = 0;
      return acc;
    }, {})
  );

  const [totalVotes, setTotalVotes] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (optionLabel) => {
    if (hasVoted) return;  // Prevent multiple votes for now
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
}

