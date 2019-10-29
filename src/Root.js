import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "store/rootReducer";
import App from "components/App";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
