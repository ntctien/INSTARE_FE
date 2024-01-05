import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import allReducers from './reducers';
import '~/fonts/Ubuntu';
import reportWebVitals from './reportWebVitals';
import { ProgressProvider } from './contexts/ProgressContext';
import { SplashProvider } from './contexts/SpashContext';
import { WebsocketProvider } from './contexts/WebsocketContext';
import { SRSWebsocketProvider } from './contexts/SRSWebsocketContext';
import { AppMenuProvider } from './contexts/AppMenuContext';

const middleware = [thunk]
const store = createStore(allReducers, applyMiddleware(...middleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <SplashProvider>
      <ProgressProvider>
        <WebsocketProvider>
          <SRSWebsocketProvider>
            <AppMenuProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </AppMenuProvider>
          </SRSWebsocketProvider>
        </WebsocketProvider>
      </ProgressProvider>
    </SplashProvider>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
