// import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "store/reducers";
import GlobalStyle from "style/global";

// const queryClient = new QueryClient();

const Root = () => {

    return (
        <Provider store={store}>
            {/* <QueryClientProvider client={queryClient}> */}
            <GlobalStyle />
            <App />
            {/* </QueryClientProvider> */}
        </Provider>
    );
};

export default Root;


