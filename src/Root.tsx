import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "store/reducers";
import GlobalStyle from "style/global";

const Root = () => {


    return (
        <Provider store={store}>
            <GlobalStyle />

            <StrictMode>
                <App />
            </StrictMode>
        </Provider>
    );
};

export default Root;


