import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme:() => {}, // we can give theme variable or method also 
    lightTheme:() => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}