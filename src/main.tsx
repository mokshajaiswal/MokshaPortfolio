// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Redux Provider
import App from './App';
import store from './redux/store'; // Import the Redux store
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);