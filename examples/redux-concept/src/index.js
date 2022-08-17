import { BrowserRouter } from "react-router-dom";
import App from "./App";
import roorReducer from "./reducers";

const { render } = require("@testing-library/react");
const { Provider } = require("react-redux");
const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");


const store = createStore(roorReducer, composeWithDevTools(applyMiddleware(thunk)))

render(
    <Provider store={store}>
        <App />                
    </Provider>, document.getElementById('root')
)