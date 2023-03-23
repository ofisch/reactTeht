import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../src/utils/variables';

const Single = () => {
  const {state} = useLocation();

  const {file} = state; // TODO in the next task: single media from props.location.state

  return (
    <>
      <h1>{file.title}</h1>
      <img src={mediaUrl + file.filename} alt={file.title} />
    </>
  );
};

// TODO in the next task: add propType for location

export default Single;
