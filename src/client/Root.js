import React from 'react';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';
import { initializeStore } from '../store';


const Root = () => {
    const store = initializeStore();
    return (
        <BrowserRouter>
            <Provider {...store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default Root;