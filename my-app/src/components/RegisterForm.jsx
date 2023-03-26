//  import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';
import {useUser} from '../hooks/ApiHooks';

const RegisterForm = (props) => {
  const {postUser, getCheckUser} = useUser();

  const initValues = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const doRegister = async () => {
    try {
      const userResult = await postUser(inputs);
      alert(userResult.message);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUsername = async () => {
    const {available} = await getCheckUser(inputs.username);
    available || alert('Username not available');
  };

  const {inputs, handleSubmit, handleInputChange} = useForm(
    doRegister,
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
          onBlur={handleUsername}
        />
        <input
          name="password"
          type="password"
          placeholder="salasana"
          onChange={handleInputChange}
          value={inputs.password}
        />
        <input
          name="email"
          type="email"
          placeholder="sähköposti"
          onChange={handleInputChange}
          value={inputs.email}
        />
        <input
          name="full_name"
          placeholder="koko nimi"
          onChange={handleInputChange}
          value={inputs.full_name}
        />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
