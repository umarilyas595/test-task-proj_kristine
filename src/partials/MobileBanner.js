import { Flex, Image } from "@chakra-ui/react"
// import mobileBanner from "../assets/image/mobileBanner.svg";
import mobileBanner from "../assets/image/mobileBanner.png";
const MobileBanner = () => {

    const mobileBannerFlexStyleProp = {
        mt: "6",
        pl: "0",
        pr: "0",
        align: "center",
        justifyContent: "space-between",
        w: "100%",
        flexDirection: "row",
        mb: "4"
    }


    return (
        <Flex {...mobileBannerFlexStyleProp}>
            <Image w="100%" src={mobileBanner} />
        </Flex>
    )
}

export default MobileBanner;