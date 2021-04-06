import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  overrides: { MuiAppBar: { colorPrimary: { backgroundColor: "#FFC0CB" } } },
  palette: { type: "dark" },
});

export default theme;
