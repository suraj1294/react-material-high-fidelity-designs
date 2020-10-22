import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60"

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


export default createMuiTheme({
    // status: {
    //     danger: '#e53e3e',
    //   },
      palette: {
        primary: { main :`${arcBlue}`},
        secondary: { main: `${arcOrange}`}   
      },
      
})