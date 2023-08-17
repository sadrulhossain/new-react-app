import ReactDOM from "react-dom/client";
import App from './App';


const root = ReactDOM.createRoot(
    document.getElementById('root')
);
const el = <App title='First React App' />;
root.render(el);