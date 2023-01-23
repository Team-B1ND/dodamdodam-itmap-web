import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "store/reducers";
import GlobalStyle from "style/global";


const Root = () => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <GlobalStyle />
                <App />
            </Provider>
        </QueryClientProvider>
    );
};

export default Root;


