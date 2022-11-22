import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
};

export const ContextProvider = ({ children }) => {
    const [ activeMenu, setActiveMenu] = useState(true);
    const [ isClicked, setIsClicked ] = useState(initialState);
    const [ screenSize, setScreenSize ] = useState(undefined);

    const handleClick = ((clickedItem) => {
        setIsClicked({ ...initialState, [clickedItem] : true });
    })

    //Whatever values is passed through here will be passed through all the components in REACT
    return (
        <StateContext.Provider
            value = {{ 
                activeMenu, //activeMenu: activeMenu
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }}
        >
            {/* Always return children */}
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);