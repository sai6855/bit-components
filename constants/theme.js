import { createMuiTheme } from "@material-ui/core/styles";

const theme = {
  palette: {
    primary: {
      main: "rgba(170,126,80,1)",
      contrastText: "#FFF",
    },
    secondary: {
      main: "rgba(73,120,182,1)",
      contrastText: "#FFF",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 2,
        textTransform: "none",
        fontSize: "1rem",
        fontWeight: "bold",
        "&:focus": {
          outline: "1px rgba(227,228,230, 0.8)",
        },
      },
      containedSizeLarge: {
        fontSize: "1rem",
      },
      outlinedSizeLarge: {
        fontSize: "1rem",
      },
      containedSizeSmall: {
        fontSize: "0.875rem",
      },
      outlinedSizeSmall: {
        fontSize: "0.875rem",
      },
      startIcon: {
        // position: 'absolute',
        // left: 20,
      },
    },
    MuiCheckbox: {
      colorSecondary: {
        color: "rgba(22,25,29,0.2)",
        transform: "scale(0.8)",
        "&$checked": {
          color: "rgba(170,126,80,1)",
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "0px",
      },
    },
    MuiRadio: {
      colorSecondary: {
        transform: "scale(0.8)",
        color: "rgba(22,25,29,0.2)",
        "&$checked": {
          color: "rgba(170,126,80,1)",
        },
      },
    },
    MuiOutlinedInput: {
      root: {
        "& fieldset": {
          borderRadius: `2px`,
        },
      },
      input: {
        padding: "0.75rem 0.5rem",
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },

    MuiFormHelperText: {
      contained: {
        marginLeft: 2,
        marginRight: 0,
      },
    },
    MuiTypography: {
      root: {
        // width: '100%',
      },
    },
    MuiFormControlLabel: {
      label: {
        width: "100%",
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
      variant: "contained",
      color: "primary",
    },
    MuiTextField: {
      variant: "outlined",
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Graphik",
    color: "rgba(23,28,38,1)",
  },
};

const muiTheme = createMuiTheme(theme);

export default muiTheme;
