import PropTypes from 'prop-types';
import RegisterForm from '../src/components/RegisterForm';
import LoginForm from '../src/components/LoginForm';

const Login = (props) => {
  return (
    <>
      <LoginForm />
      <RegisterForm />
    </>
  );
};

Login.propTypes = {};

export default Login;
