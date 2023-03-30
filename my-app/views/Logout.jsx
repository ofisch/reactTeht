import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';

const Logout = (props) => {
  localStorage.removeItem('userToken');
  return <Navigate to="/" />;
};

Logout.propTypes = {};

export default Logout;
