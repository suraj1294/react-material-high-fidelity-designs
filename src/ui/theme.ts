import { createMuiTheme } from "@material-ui/core/styles";
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

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

//   declare module "@material-ui/core/styles/createPalette" {
//     interface Palette {
//         arcBlue: React.CSSProperties['color'];
//         arcOrange: React.CSSProperties['color'];
//     }
//     interface PaletteOptions {
//         arcBlue: React.CSSProperties['color'];
//         arcOrange: React.CSSProperties['color'];
//     }
//   }

declare module "@material-ui/core/styles/createTypography" {
  interface Typography {
    tab: Typography["h1"];
    estimate: Typography["h1"];
  }
  interface TypographyOptions {
    tab: TypographyOptions["h1"];
    estimate: TypographyOptions["h1"];
  }
}

export default createMuiTheme({
  // status: {
  //     danger: '#e53e3e',
  //   },
  palette: {
    primary: { main: `${arcBlue}` },
    secondary: { main: `${arcOrange}` },
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
  },
});
