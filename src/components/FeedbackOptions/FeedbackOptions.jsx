import React from 'react';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

const firsLeterCapital = string => {
  let newString = [...string];
  newString[0] = string[0].toUpperCase();
  return newString.join('');
};
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            className={css.statBtn}
            onClick={() => onLeaveFeedback(option)}
          >
            {firsLeterCapital(option)}
          </button>
        );
      })}
    </>
  );
};

export { FeedbackOptions };
