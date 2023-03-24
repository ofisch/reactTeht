//  import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';

const LoginForm = (props) => {
  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = () => {
    console.log('login submitted', inputs);
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doLogin,
    initValues
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="käyttäjänimi"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <input
          name="password"
          type="password"
          placeholder="salasana"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
