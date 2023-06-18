import React, { Component } from 'react';
import { FeedbackOptions, Statistics } from 'components';
import './Feedback.css';
import clsx from 'clsx';

const Notification = ({ message }) => {
  return <>{message}</>;
};

const Section = ({ children }) => {
  return <div className={clsx('wrapper')}>{children}</div>;
};

class Feedback extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
    total: 0,
    positivePercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = e =>
    (this.total = this.state.good + this.state.neutral + this.state.bad);

  countPositiveFeedbackPercentage = () =>
    Math.floor((this.state.good / this.total) * 100);

  handleChange = e => {
    this.setState(prev => ({
      [e]: prev[e] + 1,
    }));
    // this.countTotalFeedback();
    // this.countPositiveFeedbackPercentage();
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const { good, bad, neutral } = this.state;

    return (
      <Section title="">
        <h1>Please leave feedback </h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleChange}
        />
        <br /> <br />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}

export default Feedback;
