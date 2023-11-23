export type Scheme = 'light';
export type Screens = { [key: string]: string };
export type Theme = 'theme-default' | string;
export type Themes = { id: string; name: string }[];

export interface AppConfig {
    scheme: Scheme;
    screens: Screens;
    theme: Theme;
    themes: Themes;
}

export const appConfig: AppConfig = {
    scheme: 'light',
    screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1440px'
    },
    theme: 'theme-teal',
    themes: [
        {
            id: 'theme-teal',
            name: 'Teal'
        },
    ]
};
