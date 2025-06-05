// src/hooks/useRedirectOnReload.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useRedirectOnReload(timeout = 5000) {
  const navigate = useNavigate();

  useEffect(() => {
    const shouldRedirect = localStorage.getItem('shouldRedirectToHome') === 'true';

    if (shouldRedirect) {
      const timer = setTimeout(() => {
        localStorage.removeItem('shouldRedirectToHome');
        navigate('/finish');
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [navigate, timeout]);

  const handleManualRedirect = () => {
    localStorage.removeItem('shouldRedirectToHome');
    navigate('/');
  };

  return { handleManualRedirect };
}
