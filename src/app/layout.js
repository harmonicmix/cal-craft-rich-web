import "./globals.css";
import { Kanit } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material";
const kanit = Kanit({ subsets: ["thai"], weight: ["400"] });

export default function RootLayout({ children }) {
  // const themeConfig = createTheme({
  //   typography: {
  //     fontFamily: ["Kanit"].join(","),
  //   },
  // });
  return (
    <html lang="en">
      {/* <ThemeProvider theme={themeConfig}> */}
      <body className={kanit.className}>{children}</body>
      {/* </ThemeProvider> */}
    </html>
  );
}
