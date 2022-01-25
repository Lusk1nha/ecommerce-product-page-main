import React, { createContext, useEffect, useState} from "react";

type ThemeType = {
  bgColor: string,
  bgColor2: string,
  fontColor: string,
  darkTheme: boolean
}

type PropsThemeContext = {
  theme: ThemeType,
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

const DEFAULT_VALUE = {
  theme: {
    bgColor: "#FFFFFF",
    bgColor2: "",
    fontColor: "",
    darkTheme: false
  },
  setTheme: () => {}
}

export const ThemeContext = createContext<PropsThemeContext>(DEFAULT_VALUE)

export function ThemeContextProvider(props: any) {
  const [theme, setTheme] = useState(DEFAULT_VALUE.theme)
  
  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
};
