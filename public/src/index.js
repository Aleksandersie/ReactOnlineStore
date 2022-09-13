import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserStore from "./Store/UserStore";
import DeviceStore from "./Store/DeviceStore";


export const Context = createContext(null)

console.log(process.env.REACT_APP_API_URL)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
     user: new UserStore(),
     device: new DeviceStore(),
    }}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    </Context.Provider>
);


