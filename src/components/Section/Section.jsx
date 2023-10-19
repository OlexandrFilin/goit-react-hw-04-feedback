import React from 'react';
import css from 'components/Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.statTitle}>{title}</h2>
      {children}
    </section>
  );
};

export { Section };
