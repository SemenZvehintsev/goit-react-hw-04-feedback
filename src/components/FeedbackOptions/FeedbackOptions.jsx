import PropTypes from 'prop-types';
import styles from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({onLeaveFeedback}) => {
    return <div className={styles.feedback}>
        <button className={styles.button} type="button" name='Good' onClick={onLeaveFeedback}>Good</button>
        <button className={styles.button} type="button" name='Neutral' onClick={onLeaveFeedback}>Neutral</button>
        <button className={styles.button} type="button" name='Bad' onClick={onLeaveFeedback}>Bad</button>
    </div>
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}