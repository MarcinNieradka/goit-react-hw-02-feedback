import React, { Component } from 'react';

const Notification = ({ message }) => {
  return <>{message}</>;
};

const Section = ({ children }) => {
  return <>{children}</>;
};

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
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

  // countPositiveFeedbackPercentage = e =>
  //   (this.positivePercentage = Math.floor(
  //     100 / (this.total / this.state.good)
  //   ));

  countPositiveFeedbackPercentage = () =>
    // const totalFeedback = this.countTotalFeedback();
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
