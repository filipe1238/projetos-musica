import {
    RaThemeOptions,
    defaultLightTheme,
    defaultDarkTheme,
    nanoDarkTheme,
    nanoLightTheme,
    radiantDarkTheme,
    radiantLightTheme,
    houseDarkTheme,
    houseLightTheme,
} from 'react-admin';
import { softDarkTheme, softLightTheme } from './softTheme';
import { chiptuneDarkTheme, chiptuneLightTheme } from './chiptuneTheme';

export type ThemeName =
    | 'soft'
    | 'default'
    | 'nano'
    | 'radiant'
    | 'house'
    | 'chiptune';

export interface Theme {
    name: ThemeName;
    light: RaThemeOptions;
    dark?: RaThemeOptions;
}

export const themes: Theme[] = [
    { name: 'default', light: defaultLightTheme, dark: defaultDarkTheme },
    { name: 'soft', light: softLightTheme, dark: softDarkTheme },
    { name: 'nano', light: nanoLightTheme, dark: nanoDarkTheme },
    { name: 'radiant', light: radiantLightTheme, dark: radiantDarkTheme },
    { name: 'house', light: houseLightTheme, dark: houseDarkTheme },
    { name: 'chiptune', light: chiptuneLightTheme, dark: chiptuneDarkTheme },
];
