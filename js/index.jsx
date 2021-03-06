import "babel-core/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createLoggerMiddleware from "redux-logger";
import { Provider } from "react-redux";
import { reduxReactRouter } from "redux-router";
import createHistory from "history/lib/createBrowserHistory";
import routes from "./routes";
import loggerConfig from "utils/loggerConfig";
import rootReducer from "reducers";

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLoggerMiddleware(loggerConfig)
)(createStore);

const store = compose(
    reduxReactRouter({ createHistory })
)(createStoreWithMiddleware)(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        {routes(store)}
    </Provider>,
    document.getElementById("app")
);
