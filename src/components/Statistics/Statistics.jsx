import clsx from 'clsx';
import React from 'react';
import './Statistics.css';

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
