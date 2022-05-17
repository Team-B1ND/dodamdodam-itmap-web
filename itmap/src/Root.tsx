import React, { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import CustomThemeProvider from "components/Common/CustomThemeProvider";
import store from "./store";

const Root = () => {
    return (
        <Provider store={store}>
            <StrictMode>
                <CustomThemeProvider>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </CustomThemeProvider>
            </StrictMode>
        </Provider>
    );
};

export default Root;