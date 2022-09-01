import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "store/reducers";
import GlobalStyle from "style/global";

const Root = () => {


    return (
        <Provider store={store}>
            {/* <StrictMode> */}
            <GlobalStyle />
            <App />
            {/* </StrictMode> */}
        </Provider>
    );
};

export default Root;


