import clsx from 'clsx';
import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={clsx('statistics')}>
      <h2>Statistics</h2>
      <span>Good: {good}</span>

      <span>Neutral: {neutral}</span>

      <span>Bad: {bad}</span>

      <span>Total: {total}</span>

      <span>Positive feedback: {positivePercentage} %</span>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
