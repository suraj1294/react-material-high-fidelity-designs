import { createMuiTheme } from "@material-ui/core/styles/";
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#8f8f8f";

// declare module '@material-ui/core/styles/createMuiTheme' {
//     interface Theme {
//       status: {
//         danger: React.CSSProperties['color'],
//       }
//     }
//     interface ThemeOptions {
//       status: {
//         danger: React.CSSProperties['color']
//       }
//     }
//   }

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    arcBlue: React.CSSProperties["color"];
    arcOrange: React.CSSProperties["color"];
    arcGrey: React.CSSProperties["color"];
  }
  interface PaletteOptions {
    arcBlue: React.CSSProperties["color"];
    arcOrange: React.CSSProperties["color"];
    arcGrey: React.CSSProperties["color"];
  }
}

declare module "@material-ui/core/styles/createTypography" {
  interface Typography {
    tab: Typography["h1"];
    estimate: Typography["h1"];
    heroButton: Typography["button"];
    infoButton: Typography["button"];
  }
  interface TypographyOptions {
    tab: TypographyOptions["h1"];
    estimate: TypographyOptions["h1"];
    heroButton: Typography["button"];
    infoButton: Typography["button"];
  }
}

export default createMuiTheme({
  palette: {
    primary: { main: arcBlue },
    secondary: { main: arcOrange },
    arcBlue,
    arcOrange,
    arcGrey,
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "white",
    },
    estimate: {
      borderRadius: 50,
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: arcBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      color: arcBlue,
      fontSize: "2.5rem",
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: arcBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: arcGrey,
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 300,
      color: "white",
    },
    body1: {
      fontSize: "1.25rem",
      color: arcGrey,
      fontWeight: 300,
    },
    caption: {
      fontSize: "1rem",
      fontWeight: 300,
      color: arcGrey,
    },
    heroButton: {
      borderColor: arcBlue,
      color: arcBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
    infoButton: {
      borderColor: "white",
      color: "white",
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },

  overrides: {
    MuiInputLabel: {
      root: {
        color: arcBlue,
        fontSize: "1rem",
      },
    },
    MuiInput: {
      root: {
        color: arcGrey,
        fontWeight: 300,
      },
      underline: {
        "&:before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${arcBlue}`,
        },
      },
    },
  },
});
