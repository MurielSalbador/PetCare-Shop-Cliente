import useRedirectOnReload from '../../../hooks/redirectOnPage/useRedirectOnReload.js';
import './cat-loader.css';

export default function ReloadRedirect() {
  const { handleManualRedirect } = useRedirectOnReload();

  return (
    <div className="cat404-container">
      <div className="cat">
        {Array.from({ length: 18 }).map((_, index) => (
          <div key={index} className="cat__segment"></div>
        ))}
      </div>
      <p className="info-text">
        Serás redirigido automáticamente...
      </p>
    </div>
  );
}
