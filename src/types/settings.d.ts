type ThemeType = "light" | "dark"

type ThemeArray = [
    { option: "light"; name: "light" },
    { option: "dark"; name: "dark" }
  ];

  type ContextType = {
    theme: ThemeType;
    updateTheme: (theme: ThemeType) => void;
  };