// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\redux\reducer.js

// File: reducer.js
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions'; 

const initialProductsState = [];
const productsReducer = createReducer(initialProductsState, {
  [actions.addProduct]: (state, action) => {
    state.push(action.payload);
  },
  [actions.removeProduct]: (state, action) => {
    return state.filter(product => product.id !== action.payload.id);
  },
});

const initialHistorysState = [];
const historysReducer = createReducer(initialHistorysState, {
  [actions.addHistory]: (state, action) => {
    state.push(action.payload);
  },
  [actions.removeHistory]: (state, action) => {
    return state.filter(history => history.id !== action.payload.id);
  },
});

const initialFeedbackState = []; 
const feedbackReducer = createReducer(initialFeedbackState, {
  [actions.addFeedback]: (state, action) => {
    state.push(action.payload);
  },
  [actions.removeFeedback]: (state, action) => {
    return state.filter(feedback => feedback.id !== action.payload.id);
  },
});

const initialContactsState = [];
const contactsReducer = createReducer(initialContactsState, {
  [actions.addContact]: (state, action) => {
    state.push(action.payload);
  },
  [actions.removeContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload.id);
  },
});

const rootReducer = combineReducers({
  products: productsReducer,
  historys: historysReducer,
  feedback: feedbackReducer,
  contacts: contactsReducer,
});

export default rootReducer;
