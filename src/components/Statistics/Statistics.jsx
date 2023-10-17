import React, { Component } from 'react';
import css from '../Statistics/Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <h2 className={css.statTitle}>Statistics</h2>
        <ul className={css.statList}>
          <li className={css.statItem}>
            Good: <span className={css.statEvalGood}>{good}</span>
          </li>
          <li className={css.statItem}>
            Neutral: <span className={css.statEvalNeutr}>{neutral}</span>
          </li>
          <li className={css.statItem}>
            Bad: <span className={css.statEvalBad}>{bad}</span>
          </li>
          <li className={css.statItem}>
            Total: <span className={css.statTotal}>{total}</span>
          </li>
          <li className={css.statItem}>
            Positive feedback:{' '}
            <span className={css.statTotal}>{positivePercentage}%</span>
          </li>
        </ul>
      </div>
    );
  }
}
