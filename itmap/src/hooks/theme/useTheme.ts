import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ETheme } from "enum/theme.enum";
import { RootState } from "store";
import { changeThemeAction } from "store/theme";
import { darkTheme, lightTheme } from "styles/theme";

const useTheme = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);

  const { DARK, LIGHT } = ETheme;

  const themeColor = useMemo(() => {
    return theme === DARK ? darkTheme : lightTheme;
  }, [DARK, theme]);

  const handleChangeTheme = useCallback((): void => {
    const switchTheme = theme === DARK ? LIGHT : DARK;
    dispatch(changeThemeAction(switchTheme));
  }, [DARK, LIGHT, dispatch, theme]);

  return {
    theme,
    handleChangeTheme,
    themeColor,
  };
};

export default useTheme;
