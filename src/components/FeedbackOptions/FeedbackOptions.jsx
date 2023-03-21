import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedBackOptions = ({
  // onGoodIncrement,
  // onNeutralIncrement,
  // onBadIncrement,
  onLeaveFeedback,
  options
}) => (
  <div className={css.wrapper}>
    {options.map(option => (
      <button key={option} type="button" onClick={onLeaveFeedback}>
      {option}
    </button>
  ))
    }

    {/* <button type="button" onClick={onGoodIncrement}>
      Good
    </button>
    <button type="button" onClick={onNeutralIncrement}>
      Neutral
    </button>
    <button type="button" onClick={onBadIncrement}>
      Bad
    </button> */}
  </div>
);

// FeedBackOptions.propTypes = {
//   onGoodIncrement: PropTypes.func.isRequired,
//   onNeutralIncrement: PropTypes.func.isRequired,
//   onBadIncrement: PropTypes.func.isRequired,
// };


FeedBackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}