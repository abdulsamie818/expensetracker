import React, {createContext, useReducer } from 'react';
//Import reducer
import AppReducer from './AppReducer';
//Create the initial state
const initialState = {
    transactions: [
        {id: 1, discription: "income 1", transactionAmount: 1000},
        {id: 2, discription: "Expense 1", transactionAmount: -100},
        {id: 3, discription: "income 2", transactionAmount: 1000},
        {id: 4, discription: "Expense 2", transactionAmount: -200}
    ]
}
//Create the Global Context
export const GlobalContext = createContext(initialState);
// Create a provider for the global context
export const GlobalProvider = ({children}) => {
       const [state] = useReducer(AppReducer, initialState)      
 
    return (
        <GlobalContext.Provider value={
            {
            transactions: state.transactions
            }
    }>
        {children}
    </GlobalContext.Provider>
        ) 
}