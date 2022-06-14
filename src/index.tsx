import Root from "./Root";
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Root />);

reportWebVitals();
