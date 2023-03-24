import {useState} from 'react';

const useForm = (callback, initState) => {
  const [inputs, setInputs] = useState(initState);
  const handleSubmit = (event) => {
    event && event.preventDefault();
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((input) => {
      return {
      ...inputs,
      [event.target.name]: event.target.value,
    };
    });
  };
  return {inputs, handleSubmit, handleInputChange};
};

export default useForm;
