import {useContext, createContext, useState} from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [isThemeLight, setIsThemeLight] = useState(true);
    return(
        <ThemeContext.Provider value = {{isThemeLight, setIsThemeLight}}>
            {children}
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);

export {useTheme, ThemeProvider}