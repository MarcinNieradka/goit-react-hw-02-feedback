import React from 'react';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <h2>Statistics</h2>
      <span>Good: {good}</span>
      <br />
      <span>Neutral: {neutral}</span>
      <br />
      <span>Bad: {bad}</span>
      <br />
      <span>Total: {total}</span>
      <br />
      <span>Positive feedback: {positivePercentage} %</span>
    </>
  );
};
