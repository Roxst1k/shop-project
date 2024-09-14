'use client'
import { createContext, useContext, useReducer } from 'react';

const MyContext = createContext();

const initialState = { counter: 0};

const reducer = (state, action) => {
    switch (action.type) {
        case 'addCount':
            return { count: state.counter + 1 };
        default:
            return state;
    }
};

export const MyProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);