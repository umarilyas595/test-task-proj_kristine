import { Grid, Flex, Menu, MenuItem, Divider } from "@chakra-ui/react"
import BannerSection from "./BannerSection";
import CardLayout from "./CardLayout";
import PrintInvoice from "./PrintInvoice";

const MainBody = () => {

    const menuBarStyleProp = {
        d: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "max-content",
        w: "100%",
        // pl: ["12 , 6 , 2"]
    }
    const menuBarButtonStyleProp = {
        d: "inline-flex",
        w: "max-content",
        mr: "5",
        fontSize: "sm",
        fontWeight: "bold"
    }

    const dividerStyleProp = {
        w: "96%", bg: "gray.300", height: "1px", m: "10px auto 15px auto"
    }

    const mainBodyGridStyleProp = {
        templateColumns: "23% 46% 31%", pl: "10", w: "100%", h: "100%",
    }

    return (
        <Grid d="block" h="100vh" minH="100vh" overflow="hidden">
            <Flex {...menuBarStyleProp} pl={[12, 6, 2]} >
                <Menu >
                    <MenuItem {...menuBarButtonStyleProp}>
                        Property Details
                    </MenuItem>
                    <MenuItem {...menuBarButtonStyleProp}>
                        Comparable Sales
                    </MenuItem>
                    <MenuItem {...menuBarButtonStyleProp}>
                        Buyers
                    </MenuItem>
                    <MenuItem {...menuBarButtonStyleProp}>
                        Media/Notes
                    </MenuItem>
                    <MenuItem {...menuBarButtonStyleProp}>
                        Tasks
                    </MenuItem>
                    <MenuItem {...menuBarButtonStyleProp}>
                        Skiptrace
                    </MenuItem>
                </Menu>
            </Flex>
            <Divider {...dividerStyleProp} />
            <Grid  {...mainBodyGridStyleProp} overflow="hidden" >
                <CardLayout />
                <BannerSection />
                <PrintInvoice />
            </Grid>
        </Grid>
    )
}

export default MainBody;