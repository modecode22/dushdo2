import React, { createContext, useState, useContext, useEffect } from "react";
import { getFromLocalStorage } from "../lib/utils";

// Settings Context Initialization
const SettingsContext = createContext<ContextType>({
  theme: "dark",
  updateTheme: () => {}
});



export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // States
  const [theme, setTheme] = useState<ThemeType>(
    getFromLocalStorage("theme", "dark")
  );
  

  // Effects
  useEffect(() => {
    // Update the DOM class based on theme
    const className = "dark";
    const htmlClass = document.documentElement.classList;
    theme === "dark" ? htmlClass.add(className) : htmlClass.remove(className);
  }, [theme]);


  return (
    <SettingsContext.Provider
      value={{
        theme,
        updateTheme: (value: ThemeType) =>
          updateAndStore("theme", value, setTheme)
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
