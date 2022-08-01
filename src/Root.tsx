import React, { StrictMode } from "react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./components/App";
import store from "store/reducers";


const Root = () => {

    // const queryClient = new QueryClient();

    return (
        <Provider store={store}>
            {/* <StrictMode> 리렌더링이 되게 한다 */}
            {/* <QueryClientProvider client={queryClient}> */}
            <App />
            {/* </QueryClientProvider> */}
            {/* </StrictMode> */}
        </Provider>
    );
};

export default Root;


