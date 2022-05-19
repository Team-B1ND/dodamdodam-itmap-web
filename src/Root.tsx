import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./components/App";

const Root = () => {

    const queryClient = new QueryClient();

    return (
        // <Provider>
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </StrictMode>
        // </Provider>
    );
};

export default Root;