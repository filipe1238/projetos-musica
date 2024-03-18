import { RaThemeOptions } from 'react-admin';


const createChiptuneTheme = (mode: 'light' | 'dark') => {
    return {
        palette: {
            mode,
            primary: {
                main: '#0f0',
            },
            background: {
                default: mode === 'light' ? '#f8f8f8' : '#111111',
                paper: mode === 'light' ? '#f8f8f8' : '#212121',
            },
        },
        typography: {
            fontFamily: `'Pixelify Sans', cursive`,
        },
    };
}

export const chiptuneDarkTheme: RaThemeOptions = createChiptuneTheme('dark');
export const chiptuneLightTheme: RaThemeOptions = createChiptuneTheme('light');
