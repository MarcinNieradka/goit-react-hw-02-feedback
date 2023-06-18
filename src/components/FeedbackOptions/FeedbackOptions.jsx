import clsx from 'clsx';
import React from 'react';
import './FeedbackOptions.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  return (
    <div>
      {options.map((item, index) => {
        return (
          <button
            className={clsx('button')}
            key={index}
            type="button"
            onClick={() => onLeaveFeedback(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
