import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

export default function configureStore() {
  const middlewares = [thunk];

  const store = createStore(
    rootReducers,
    compose(
      applyMiddleware(...middlewares),
      window.devToolsExtension ? window.devToolsExtension() : f => f // add support for Redux dev tools
    )
  );

  return store;
}
