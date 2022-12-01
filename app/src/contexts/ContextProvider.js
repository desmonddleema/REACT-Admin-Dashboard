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
    const [ currentColor, setCurrentColor ] = useState('#03C9D7')
    const [ currentMode, setCurrentMode ] = useState('light');
    const [ themeSettings, setThemeSettings ] = useState(false);
    
    const handleClick = ((clickedItem) => {
        setIsClicked({ ...initialState, [clickedItem] : true });
    });

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('colorMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('themeMode', color);
        setThemeSettings(false);
    }

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
                setScreenSize,
                currentColor,
                currentMode,
                themeSettings,
                setThemeSettings,
                setMode,
                setColor
            }}
        >
            {/* Always return children */}
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);