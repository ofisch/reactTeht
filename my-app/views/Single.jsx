import {Card, CardMedia, Typography} from '@mui/material';
import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../src/utils/variables';

const Single = () => {
  const {state} = useLocation();

  const {file} = state; // TODO in the next task: single media from props.location.state

  return (
    <>
      <Typography>{file.title}</Typography>
      <Card>
        <CardMedia
          component={'img'}
          src={mediaUrl + file.filename}
          title={file.title}
        />
      </Card>
    </>
  );
};

// TODO in the next task: add propType for location

export default Single;
