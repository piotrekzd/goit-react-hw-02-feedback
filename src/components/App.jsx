import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';  
// import { Statistics } from './Statistics/Statistics';
// import { Notification } from './Notification/Notification';
import style from './App.module.css'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        this.setState(state => ({ good: state.good + 1 }));
        break;
      case 'neutral':
        this.setState(state => ({ neutral: state.neutral + 1 }));
        break;
      case 'bad':
        this.setState(state => ({ bad: state.bad + 1 }));
        break;
      default:
        return 0;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    // const { good, neutral, bad } = this.state;

    return (
      <div className={style.wrapper}>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {/* <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )};
        </Section> */}
      </div>
    );
  };
};