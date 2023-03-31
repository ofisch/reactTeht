import {createTheme, ThemeProvider} from '@mui/material';
import {useContext, useEffect} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {MediaContext} from '../src/contexts/MediaContext';
import {useUser} from '../src/hooks/ApiHooks';
import {themeOptions} from '../src/theme/themeOptions';

const Layout = () => {
  const {user, setUser} = useContext(MediaContext);
  const {getUserByToken} = useUser();
  const navigate = useNavigate();

  const getUserInfo = async () => {
    const userToken = localStorage.getItem('userToken');
    if (userToken !== null) {
      console.log(userToken);
      const user = await getUserByToken(userToken);
      if (user) {
        setUser(user);
        navigate('/home');
        return;
      }
    }
    navigate('/');
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/logout">Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/">Login</Link>
              </li>
            )}
          </ul>
        </nav>
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
