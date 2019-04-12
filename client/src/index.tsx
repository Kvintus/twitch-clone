import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'

import reducers from './store/reducers'
import App from './components/App'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware()
));

const Root = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
    <Root/>,
    document.querySelector('#root')
)

serviceWorker.register()