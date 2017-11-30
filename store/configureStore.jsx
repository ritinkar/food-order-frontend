import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware as createRouterMiddleware, push } from 'react-router-redux'


export const history = createHistory()

const routerMiddleware = createRouterMiddleware(history)

const loggerMiddleware = createLogger()

const mainReducer = combineReducers({
  ...rootReducer,
  router: routerReducer
})

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      //loggerMiddleware, // neat middleware that logs actions
      routerMiddleware // middleware that connects react router to redux
    ),
    initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
