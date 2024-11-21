import { useLocation } from 'react-router-dom';
import './pageWrapper.scss';

export function PageWrapper({ children }) {
  return (
    <div>
      {children}
    </div>
  );
};

export default PageWrapper;
