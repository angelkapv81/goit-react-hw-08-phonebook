import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Button } from '@mui/material';

import { isUserLogin } from 'store/auth/selectors';

import NavbarAuth from './NavbarAuth';
import UserMenu from './UserMenu';



function Header() {
  const isLogin = useSelector(isUserLogin);
  const navigate = useNavigate();


  return (
    <>
      <AppBar position="static">
        <Toolbar>
        <Button
            variant="h6"
            component="div"
            sx={{ flexGrow: 0, justifyContent: 'left', marginRight: isLogin ? '0' : 'auto' }}
            color="inherit"
            onClick={() => navigate('/')}
          >
            HOME
          </Button>
          {isLogin &&
            <Button
              variant="h6"
              component="div"
              sx={{ flexGrow: 0, justifyContent: 'left', marginRight: 'auto' }}
              color="inherit"
              onClick={() => navigate('/contacts')}
            >
              CONTACTS
            </Button>
          }
          {!isLogin && <NavbarAuth />}
          {isLogin && <UserMenu />}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
