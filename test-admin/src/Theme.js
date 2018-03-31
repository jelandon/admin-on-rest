import { createMuiTheme } from "material-ui/styles";

const Theme = createMuiTheme({
    palette: {
        primary: {
            light: "#7382da",
            main: "#4056a8",
            dark: "#002e78",
            contrastText: "#fff"
        },
        secondary: {
            light: "#5352c1",
            main: "#102990",
            dark: "#000461",
            contrastText: "#fff"
        },
        error: {
            light: palette.error[300],
            main: palette.error[500],
            dark: palette.error[700],
            contrastText: getContrastText(palette.error[500])
        }
    }
});

export default Theme;
