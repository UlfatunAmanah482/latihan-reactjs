import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './container/Home/home';
// import App from './App';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './redux/Reducer/globalReducer';

// store
// const storeRedux = createStore(rootReducer);

// ReactDOM.render(<Provider store={storeRedux} ><Home /></Provider>, document.getElementById('root'));
ReactDOM.render(<Home />, document.getElementById('root'));


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
