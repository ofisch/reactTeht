import {Box} from '@mui/material';
import PropTypes from 'prop-types';

const upload = (props) => {
  return (
    <Box>
      <form>
        <input type="text" name="title" value="title"></input>
        <textarea name="textarea"></textarea>
        <input type="file" name="file"></input>
      </form>
    </Box>
  );
};

upload.propTypes = {};

export default upload;
