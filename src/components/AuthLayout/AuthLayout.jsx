import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { current } from 'store/auth/operations';
import LinearIndeterminate from 'services/LinearIndeterminate';
import { getIsLoading } from 'store/contacts/selectors';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      {isLoading && <LinearIndeterminate />}
      {children}
    </>
  );
};

export default AuthLayout;
