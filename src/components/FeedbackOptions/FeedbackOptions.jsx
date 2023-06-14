import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  return (
    <>
      {options.map((item, index) => {
        return (
          <button
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};
