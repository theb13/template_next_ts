import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/GlobalStyle"
import ligth from "../styles/themes/ligth"
import dark from "../styles/themes/dark"
function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={ligth}>
            <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
