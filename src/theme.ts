import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
   palette: {
      primary: {
         main: "#335060",
         light: "#16a085",
         dark: "#000",
      },
      secondary: {
         main: "#5B9299",
         light: "#ecf0f1",
      },
      error: {
         main: red.A400,
      },
      background: {
         default: "#fff",
      },
   },
});

export default theme;
