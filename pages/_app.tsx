import React from "react";
import PropTypes from "prop-types";
import withRedux from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers";
import '$/globals.css'

function App({ Component, store, pageProps }) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
  )
}

App.propTypes = {
	Component: PropTypes.elementType.isRequired,
	store: PropTypes.object,
	pageProps: PropTypes.object,
};

App.getInitialProps = async (context) => {
	console.log(context);
	const { ctx, Component } = context;
	let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(applyMiddleware(...middlewares),
    typeof window !== "undefined" ? (
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    ) : (f) => f);
  const store = createStore(reducer, initialState, enhancer);
  return store;
})(App);
