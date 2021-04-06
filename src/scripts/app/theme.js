import { createMuiTheme } from "@material-ui/core";
export default createMuiTheme({
  overrides: {
    MuiToolbar: {
      dense: {
        minHeight: 40,
      },
    },
    MuiTabs: {
      root: {
        minHeight: 35,
      },
    },
    MuiTab: {
      root: {
        padding: "6px 3px",
        fontSize: 13,
        textTransform: "none",
        minHeight: 35,
      },
      textColorPrimary: {
        "&:hover": {
          color: "#3F51B5",
          background: "#FAFAFA",
        },
      },
    },
    MuiToggleButton: {
      root: {
        height: 35,
      },
    },
  },
});
