import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedBackOptions = ({
  onLeaveFeedback,
  options,
}) => (
  <div className={css.wrapper}>
    {options.map(option => (
      <button key={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </button>
    ))}
  </div>
);

FeedBackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
