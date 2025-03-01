import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/video/women-who-empower', { replace: true });
  }, [navigate]);

  return null;
};

export default RedirectPage;
