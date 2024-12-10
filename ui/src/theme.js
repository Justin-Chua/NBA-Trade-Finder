import { extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource/poppins";

const theme = extendTheme({
    fonts: {
        heading: `'Roboto', sans-serif`,
        body: `'Poppins', sans-serif`
    }
});

export default theme;