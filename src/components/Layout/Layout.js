import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Progress } from '../Progress/Progress';
import { Div } from './Layout.styled.js';
import { getIsLoading } from 'redux/contacts/selectors';
import css from './Layout.module.scss';

export const Layout = ({ title, blockLayoutValue, children }) => {
  const inProgress = useSelector(getIsLoading);
  return (
    <div className={css.layout__container}>
      <h2 className={css.layout__title}>{title}</h2>
      <div className={css.layout__progress}>{inProgress && <Progress />}</div>
      <div className={css.container__contacts}>
        <Div progress={inProgress || blockLayoutValue}>{children}</Div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  blockLayoutValue: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};