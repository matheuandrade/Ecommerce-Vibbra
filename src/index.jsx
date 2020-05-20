import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import { Provider } from 'react-redux';
import history from './utils/History';

const rootElement = document.getElementById('root');

const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  rootElement);

serviceWorker.unregister();


