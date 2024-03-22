import React from 'react';

const TruncateText = ({ text, maxWords }) => {
  // Split the text into words
  const words = text.split(' ');

  // Join the first 'maxWords' words with a space
  const truncatedText = words.slice(0, maxWords).join(' ');

  // Add three dots if there are more words
  const displayText = words.length > maxWords ? truncatedText + '...' : truncatedText;

  return (
    <div>
      {displayText}
    </div>
  );
};

export default TruncateText;
