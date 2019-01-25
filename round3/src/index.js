import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './app';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// if (module.hot) {
// 	module.hot.accept('./App', () => {
// 		const NextApp = require('./App').default;
// 		ReactDOM.render(
// 			<Provider store={store}>
// 				<NextApp />
// 			</Provider>,
// 			document.getElementById('root')
// 		);
// 	});
//
// 	module.hot.accept('./reducers', () => {
// 		const nextRootReducer = require('./reducers').default;
// 		store.replaceReducer(nextRootReducer);
// 	});
// }
