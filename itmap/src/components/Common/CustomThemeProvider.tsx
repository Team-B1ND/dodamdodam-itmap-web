import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import useTheme from "hooks/theme/useTheme";

type CustomThemeProviderProps = {
    children: ReactNode;
};

const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
    const { themeColor } = useTheme();

    return (
        <ThemeProvider
            theme={{
                color: themeColor,
            }}>
            {children}
        </ThemeProvider>
    );
};

export default CustomThemeProvider;
