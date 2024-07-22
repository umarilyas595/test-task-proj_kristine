import { Grid, Divider, Link, Box, Heading, Text, Flex, Image } from "@chakra-ui/react"
import PhoneIcon from "../assets/image/phoneIcon.svg";
import PhoneIconRed from "../assets/image/phoneIconRed.svg";
import OnwerClear from "../assets/image/ownerClear.svg";
import Military from "../assets/image/military.svg";
import Trust from "../assets/image/trust.svg";
import BankOwned from "../assets/image/bankOwned.svg";
import OutOfState from "../assets/image/outOfState.svg";
import Number from "../assets/image/number.svg";
import Hammer from '../assets/image/hammer.svg';
import Bed from '../assets/image/bed.svg';
import Bath from '../assets/image/bath.svg';
import FirePlace from '../assets/image/fireplace.svg';
import Pool from '../assets/image/pool.svg';
import Guarage from '../assets/image/guarage.svg';
import House from '../assets/image/house.svg';
import Acers from '../assets/image/acers.svg';
import SqFt from '../assets/image/sqft.svg';
const MobileCardLayout = () => {

    const headingStylesProps = {
        size: "sm",
        color: "gray.800",
        fontWeight: "bold",
        textTransform: 'uppercase',
    }

    const mobileGridStyleProp = {
        templateColumns: "70% 30%",
        pl: "4",
        pr: "4",
        gridGap: "2"
    }

    const boxColoredStylesProps = {
        bg: "rgba(7, 112, 186, 0.1)",
        pt: "2",
        pb: "2",
        mb: "2",
        height: "max-content",
        pl: "3",
        pr: "3",
        rounded: "8"
    }

    const darkBoxColoredStylesProps = {
        bg: "blue.500",
        pt: "3",
        pb: "3",
        height: "100%",
        pl: "2",
        pr: "2",
        d: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDir: "column",
        rounded: "8"
    }

    const mobileIconWraperStyleProp = {
        alignItems: "center",
        justifyContent: "center",
        flexDir: "row",
        mb: "3"
    }

    return (
        <Grid {...mobileGridStyleProp}>
            <Flex flexDir="column">
                <Box {...boxColoredStylesProps} >
                    <Heading {...headingStylesProps} >Owner</Heading>
                    <Divider bg="gray.400" height="1px" mt={3} mb={4} orientation="horizontal" />
                    <Flex alignItems="center" mb={2} justifyContent="flex-start" >
                        <Image src={PhoneIcon} w="6" mr={2} />
                        <Text fontSize="sm" d="flex" align="center" justifyContent="space-between" w="100%" >
                            Douglas Carter
                            <Text fontSize="xs">
                                78
                            </Text>
                        </Text>

                    </Flex>
                    <Flex mb={3} alignItems="center" justifyContent="flex-start" >
                        <Image src={PhoneIconRed} w="6" mr={2} />
                        <Text fontSize="sm" d="flex" align="center" justifyContent="space-between" w="100%" >
                            <Link textDecor="underline" color="blue.400" > Melissa Carter</Link>
                            <Text fontSize="xs">
                                75
                            </Text>
                        </Text>

                    </Flex>
                    <Text fontSize="md" mb={5} >
                        <Link textDecor="underline" color="blue.400">
                            May own 17 houses
                        </Link>
                    </Text>
                    <Text fontSize="sm" color="gray.700" mb={3} lineHeight={1.4} >
                        17 Kingfisher Rd Tewbury, MA 01876
                    </Text>
                    <Text fontSize="sm" lineHeight={1.4} color="purple.500">
                        Owned 23 years
                        Purchase with private lenders
                    </Text>
                </Box>
                <Flex {...mobileIconWraperStyleProp} >
                    <Box d="flex" alignItems="center" w="50%"  >
                        <Image mr="5px" src={Hammer} />
                        <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                            1989
                        </Text>
                    </Box>
                    <Box d="flex" alignItems="center" w="50%"  >
                        <Image mr="8px" src={Guarage} />
                        <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                            4 Garage
                        </Text>
                    </Box>
                </Flex>
                <Flex {...mobileIconWraperStyleProp} >
                    <Box d="flex" alignItems="center" w="50%"  >
                        <Image mr="10px" src={Bed} />
                        <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                            5 beds
                        </Text>
                    </Box>
                    <Box d="flex" alignItems="center" w="50%"  >
                        <Image mr="10px" src={Bath} />
                        <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                            4 Baths
                        </Text>
                    </Box>
                </Flex>
                <Flex {...mobileIconWraperStyleProp} >
                    <Box d="flex" alignItems="center" w="50%"  >
                        <Image mr="8px" src={House} />
                        <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                            3,654 Sq Ft
                        </Text>
                    </Box>
                    <Box d="flex" alignItems="center" w="50%"  >
                        <Image src={FirePlace} mr="10px" />
                        <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                            3 Fireplaces
                        </Text>
                    </Box>
                </Flex>
                <Flex {...mobileIconWraperStyleProp} >
                    <Box d="flex" alignItems="center" w="50%"  >
                        <Image src={Acers} mr="8px" />
                        <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                            1,040 Lot..
                        </Text>
                    </Box>
                    <Box d="flex" alignItems="center" w="50%"  >
                        <Image mr="13px" src={Pool} />
                        <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                            1 Pool
                        </Text>
                    </Box>
                </Flex>
                <Flex {...mobileIconWraperStyleProp} >
                    <Box d="flex" alignItems="center" w="100%"  >
                        <Image src={SqFt} mr="15px" />
                        <Text fontSize="xs" color="gray.700" fontWeight="medium" >
                            45,302 Lot SqFt
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Box {...darkBoxColoredStylesProps}>
                <Grid templateColumns="repeat(1,1fr)" mb={3} gap={2} alignItems="flex-start" justifyContent="space-between">
                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%"  >
                        <Image w="35px" mb={2} src={OnwerClear} />
                        <Text lineHeight={1.2} fontSize="14px" textAlign="center" color="gray.200" >
                            Owner Occ. Free & Clear
                        </Text>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%" >
                        <Image w="30px" mb={3} src={Military} />
                        <Text lineHeight={1.2} fontSize="14px" textAlign="center" color="gray.200" >
                            Military
                        </Text>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%" >
                        <Image w="30px" mb={3} src={Trust} />
                        <Text fontSize="14px" lineHeight={1.2} textAlign="center" color="gray.200" >
                            Trust
                        </Text>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%"  >
                        <Image w="35px" mb={2} src={BankOwned} />
                        <Text fontSize="14px" textAlign="center" color="gray.200" lineHeight={1.2}>
                            Bank Owned
                        </Text>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%" >
                        <Image w="30px" mb={3} src={OutOfState} />
                        <Text fontSize="14px" textAlign="center" color="gray.200" lineHeight={1.2}>
                            Out of State
                        </Text>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%" >
                        <Image w="30px" mb={3} src={Number} />
                    </Flex>
                </Grid>

            </Box>
        </Grid>
    )
}

export default MobileCardLayout;