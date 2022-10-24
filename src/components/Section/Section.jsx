import PropTypes from 'prop-types';
import style from './Section.module.css'

export const Section = ({ title, children }) => {
    return (
        <Section>
            <div>
                <h2 className={style.title}>
                    {title}
                </h2>
                {children}
            </div>
        </Section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};