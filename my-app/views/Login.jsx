import PropTypes from 'prop-types';
import RegisterForm from '../src/components/RegisterForm';
import LoginForm from '../src/components/LoginForm';
import {useState} from 'react';
import {Grid} from '@mui/material';

const Login = (props) => {
  const [formToggle, setFormToggle] = useState(true);
  const toggle = () => {
    setFormToggle(!formToggle);
  };
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={6}>
        {formToggle ? <LoginForm /> : <RegisterForm />}
      </Grid>
      <Grid item xs={6}>
        <p>{formToggle ? 'First time here?' : 'or'}</p>
      </Grid>
      <Grid item xs={6}>
        <button onClick={toggle}>{formToggle ? 'Register' : 'Login'}</button>
      </Grid>
    </Grid>
  );
};

Login.propTypes = {};

export default Login;
