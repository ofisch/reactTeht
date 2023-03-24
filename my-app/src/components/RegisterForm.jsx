//  import PropTypes from 'prop-types';
import useForm from '../hooks/FormHooks';

const RegisterForm = (props) => {
  const initValues = {
    username: '',
    password: '',
    email: '',
    full_name: '',
  };

  const doRegister = () => {
    console.log('submitted', inputs);
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
