import { createStore } from 'redux'
import rootReducer from './reducer'

// https://www.youtube.com/watch?v=sX3KeP7v7Kg
// https://laurenyz.medium.com/how-to-implement-redux-in-a-react-application-58d150921c08

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;