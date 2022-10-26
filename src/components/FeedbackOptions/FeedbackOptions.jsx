import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={style.btnList}>
            {options.map(option => (
                <li key={option}
                    className={style.btnListItem}
                >
                    <button
                        onClick={() => onLeaveFeedback(option)}
                        className={style.btn}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};