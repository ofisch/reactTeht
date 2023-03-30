//  import PropTypes from 'prop-types';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {MediaContext} from '../contexts/MediaContext';
import {useAuthentication} from '../hooks/ApiHooks';
import useForm from '../hooks/FormHooks';
import Button from '@mui/material/Button';
import {TextField} from '@mui/material';

const LoginForm = (props) => {
  const {setUser} = useContext(MediaContext);
  const {postLogin} = useAuthentication();
  const navigate = useNavigate();

  const initValues = {
    username: '',
    password: '',
  };

  const doLogin = async () => {
    try {
      const loginResult = await postLogin(inputs);
      localStorage.setItem('userToken', loginResult.token);
      setUser(loginResult.user);
      navigate('/home');
    } catch (error) {
      alert(error.message);
    }
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doLogin,
    initValues
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          name="username"
          placeholder="käyttäjänimi"
          onChange={handleInputChange}
          value={inputs.username}
        />
        <TextField
          fullWidth
          margin="normal"
          name="password"
          type="password"
          placeholder="salasana"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <Button fullWidth sx={{mt: 2}} variant="contained" type="submit">
          Login
        </Button>
      </form>
    </>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
