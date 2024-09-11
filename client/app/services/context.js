'use client'
import { createContext, useContext, useReducer } from 'react';

const MyContext = createContext();

const initialState = { products: []};

const reducer = (state, action) => {
    switch (action.type) {
        case 'addProductToCard':
            return { products: [...state.products, action.payload] };
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