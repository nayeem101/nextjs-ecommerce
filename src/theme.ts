import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: "#19857b",
            light: "#16a085",
            dark: "#000",
        },
        secondary: {
            main: "#556cd6",
            light: "#ecf0f1",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },

    typography: {
        htmlFontSize: 10,
    },
});

export default theme;
