import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { store } from './store/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
  <Provider store={store}>
      <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
