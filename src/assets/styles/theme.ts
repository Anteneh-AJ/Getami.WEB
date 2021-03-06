import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        secondary: {
            light: "#ffffff",
            main: "#eceff1",
            dark: "#babdbe",
            contrastText: "#000000",
        },
        primary: {
            light: "#4f5b62",
            main: "#263238",
            dark: "#000a12",
            contrastText: "#ffffff",
        },
    }
})