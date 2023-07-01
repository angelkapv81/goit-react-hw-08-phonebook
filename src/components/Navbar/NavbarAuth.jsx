import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const NavbarAuth = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button color="inherit" onClick={() => navigate('/login')}>
        Login
      </Button>
      <Button color="inherit" onClick={() => navigate('/register')}>
        register
      </Button>
    </>
  );
};

export default NavbarAuth;

