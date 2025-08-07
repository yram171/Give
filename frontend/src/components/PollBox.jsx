import React, { useState } from 'react';
import './PollOnPost.css';

const PollOnPost = ({ initialOptions }) => {
  const [votes, setVotes] = useState(
    initialOptions.reduce((acc, option) => {
      acc[option.label] = 0;
      return acc;
    }, {})
  );
}

