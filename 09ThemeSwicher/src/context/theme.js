// import { createContext, useContext } from "react";



// const ThemeContext = createContext({
//     theme: "light",
//     darkTheme: () => {},
//     lightTheme: () => {},
// });
// export const ThemeProvider =  ThemeContext.Provider;

// //hooks
// export default  function useTheme() {
//     return useContext(ThemeContext);
// }

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}