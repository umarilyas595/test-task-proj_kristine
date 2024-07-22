import { extendTheme } from "@chakra-ui/react"

// Version 1: Using objects
const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bgGradient: "linear(to-r,white,gray.200)",
                fontfamily: "Arial"
            },
        },
    },
    fonts: {
        body: "Arial",
    }
})

export default theme;