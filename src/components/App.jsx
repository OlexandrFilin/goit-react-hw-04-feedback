import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import React, { useState } from 'react';
import Notification from './Notification/Notification';

export const App = () => {
  const [isGood, setIsGuod] = useState(0);
  const [isNeutral, setIsNeutral] = useState(0);
  const [isBad, setIsBad] = useState(0);

  const onLeaveFeedback = btn => {
    switch (btn) {
      case 'Good':
        setIsGuod(prevState => prevState + 1);
        break;
      case 'Neutral':
        setIsNeutral(prevState => prevState + 1);
        break;
      default:
        setIsBad(prevState => prevState + 1);
    }
  };

  let countTotalFeedback = isGood + isNeutral + isBad;

  const countPositiveFeedbackPercentage = () => {
    const Percent = (isGood / countTotalFeedback) * 100;
    return isNaN(Percent) ? 0 : Math.round(Percent);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={['Good', 'Neutral', 'Bad']}
        onLeaveFeedback={onLeaveFeedback}
      />

      {countTotalFeedback ? (
        <Statistics
          good={isGood}
          neutral={isNeutral}
          bad={isBad}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message={'There is no feedback'}></Notification>
      )}
    </Section>
  );
};
