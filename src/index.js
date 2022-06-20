import ReactDOM from 'react-dom/client';
import App from "./App";
import Store from './Store/Store';
import { Provider } from 'react-redux';
// import { Provider } from 'react-red';
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={Store}>
    <App></App>
    </Provider>
)