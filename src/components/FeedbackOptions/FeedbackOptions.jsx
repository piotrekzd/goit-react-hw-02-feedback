import PropTypes from 'prop-types';
import style from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {  
        <div>
            {options.map((option, index) => {
                return (
                    <button
                        className={style.btn}
                        onClick={() => onLeaveFeedback(option)}
                        key={index}
                    >
                        {option}
                    </button>
                );
            })};
        </div>
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};