import { useLocation } from 'react-router-dom';
import './pageWrapper.scss';

export function PageWrapper({ children }) {
  const location = useLocation();
  const isContactUsRoute = location.pathname === '/contact-us';

  return (
    <div className={isContactUsRoute ? 'contact-us--background' : ''}>
      {children}
    </div>
  );
};

export default PageWrapper;
