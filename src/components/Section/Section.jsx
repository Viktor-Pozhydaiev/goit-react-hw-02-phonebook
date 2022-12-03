import css from '../Section/Section.module.css';

export const Section = ({ children }) => {
  return <div className={css.section}>{children}</div>;
};
