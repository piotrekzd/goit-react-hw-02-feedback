import PropTypes from 'prop-types';
import style from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <ul className={style.statList}>
                <li className={style.statListItem}>Good: {good}</li>
                <li className={style.statListItem}>Neutral: {neutral}</li>
                <li className={style.statListItem}>Bad: {bad}</li>
                <li className={style.statListItem}>Total feedback: {total}</li>
                <li className={style.statListItem}>Positive feedback: {positivePercentage} %</li>
            </ul>
        </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired
};