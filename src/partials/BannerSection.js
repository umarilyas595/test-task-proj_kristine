import { Box, Text, Flex, Image, Grid, Divider } from "@chakra-ui/react"
import Banner from "../assets/image/banner.svg";
import Hammer from '../assets/image/hammer.png';
import Bed from '../assets/image/bed.png';
import Bath from '../assets/image/bath.png';
import Guarage from '../assets/image/car.png';
import House from '../assets/image/home.png';
import Acers from '../assets/image/acers.png';
import SqFt from '../assets/image/sqft.png';
import BadgeIcons from '../assets/image/badgeIcons.svg';

const BannerSection = () => {

    const bannerDetailStyleProps = {
        bg: 'transparent',
        pt: "0",
        pb: "4",
        pl: "3",
        mt: "1",
        w: "100%"
    }

    const paraStyleProps = {
        fontSize: "md", color: "gray.600",
        display: "inline-block"
    }

    const boldParaStyleProps = {
        ...paraStyleProps,
        fontWeight: "bold"
    }

    const realaticeHrTagStyleProp = {
        orientation: "vertical", pos: "absolute", height: "100%", bg: "gray.500", w: "1px",
        right: "-10px",

    }

    const bannerImageStylePropr = {
        pos: "relative",
        zIndex: "1",
    }

    const badgeImageStylePropr = {
        pos: "relative",
        zIndex: "0",
        mt: "-4px",
        ml: "auto"
    }

    return (
        <Flex alignItems="center" pl={4} pr={4} flexDir="column" pos="relative" >
            <Box w="100%">
                <Image w="100%" {...bannerImageStylePropr} src={Banner} />
                <Image {...badgeImageStylePropr} src={BadgeIcons} />
            </Box>
            <Box {...bannerDetailStyleProps} mb={2}>
                <Text  {...paraStyleProps} >
                    <Text {...boldParaStyleProps}>27 Colleen Dr.</Text> Salem, NH 03379 <br />Brookhollow Sub - <Text {...boldParaStyleProps}>Rockingham Country</Text>
                </Text>
            </Box>

            <Grid pl="3" pr="0" w="100%" mb={6} templateColumns="repeat(4,1fr)" gap={5} alignItems="center" justifyContent="center" >
                <Box d="flex" alignItems="center" justifyContent="flex-start" >
                    <Image src={Hammer}  mr={2} />
                    <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                        1989
                    </Text>
                </Box>
                <Box d="flex" alignItems="center" justifyContent="flex-start" >
                    <Image src={Bed}  mr={2} />
                    <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                        5 beds
                    </Text>
                </Box>
                <Box d="flex" alignItems="center" justifyContent="flex-start" >
                    <Image src={Bath}  mr={2} />
                    <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                        4 Baths
                    </Text>
                </Box>
                <Box d="flex" alignItems="center" justifyContent="flex-start" >
                    <Image src={Guarage}  mr={2} />
                    <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                        4 Garage
                    </Text>
                </Box>
            </Grid>

            <Grid pl="3" pr="0" w="100%" templateColumns="repeat(3,1fr)" gap={2} alignItems="center" justifyContent="center">
                <Box d="flex" alignItems="center" justifyContent="flex-start" >
                    <Image src={House}  mr={2} />
                    <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                        3,654 Sq Ft
                    </Text>
                </Box>
                <Box d="flex" alignItems="center" justifyContent="flex-start" >
                    <Image src={Acers}  mr={2} />
                    <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                        1,040 Lot Acres
                    </Text>
                </Box>
                <Box d="flex" alignItems="center" justifyContent="flex-start" >
                    <Image src={SqFt}  mr={2} />
                    <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                        45,302 Lot SqFt
                    </Text>
                </Box>
            </Grid>

            <Divider {...realaticeHrTagStyleProp} />

        </Flex>
    )
}

export default BannerSection;