import { Grid, Box, Heading, Divider, Text, Flex, Image, Link } from "@chakra-ui/react"
import PhoneIcon from "../assets/image/phoneIcon.svg";
import PhoneIconRed from "../assets/image/phoneIconRed.svg";
import OnwerClear from "../assets/image/ownerClear.svg";
import Military from "../assets/image/military.svg";
import Trust from "../assets/image/trust.svg";
import BankOwned from "../assets/image/bankOwned.svg";
import OutOfState from "../assets/image/outOfState.svg";
import Number from "../assets/image/number.svg";

const CardLayout = () => {
    const headingStylesProps = {
        size: "sm",
        color: "gray.800",
        fontWeight: "bold",
        textTransform: 'uppercase',
    }


    const boxColoredStylesProps = {
        bg: "rgba(7, 112, 186, 0.1)",
        pt: "3",
        pb: "3",
        mb: "4",
        height: "max-content",
        pl: "3",
        w: "100%",
        border: "1px solid rgba(7, 112, 186, 0.3)",
        pr: "3",
        rounded: "8"
    }

    const darkBoxColoredStylesProps = {
        bg: "blue.500",
        pt: "3",
        pb: "3",
        height: "max-content",
        pl: "2",
        pr: "2",
        rounded: "8"
    }
    return (
        <Flex alignItems="center" flexDir="column" >
            <Box {...boxColoredStylesProps} >
                <Heading {...headingStylesProps} >Owner</Heading>
                <Divider bg="gray.400" height="1px" mt={3} mb={4} orientation="horizontal" />
                <Flex alignItems="center" mb={2} justifyContent="flex-start" >
                    <Image src={PhoneIcon} w="6" mr={3} />
                    <Text fontSize="md" d="flex" align="center" justifyContent="space-between" w="100%">
                        Douglas Carter
                        <Text fontSize="xs">
                            78
                        </Text>
                    </Text>
                </Flex>
                <Flex mb={3} alignItems="center" justifyContent="flex-start" >
                    <Image src={PhoneIconRed} w="6" mr={3} />
                    <Text fontSize="md" d="flex" align="center" justifyContent="space-between" w="100%">
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
            <Box {...darkBoxColoredStylesProps}>
                <Grid templateColumns="repeat(3,1fr)" mb={3} gap="6px" alignItems="flex-start" justifyContent="space-between">
                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%"  >
                        <Image w="35px" mb={2} src={OnwerClear} />
                        <Text lineHeight={1.2} fontSize="12px" textAlign="center" color="gray.200" >
                            Owner Occ. Free & Clear
                        </Text>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%" >
                        <Image w="30px" mb={3} src={Military} />
                        <Text lineHeight={1.2} fontSize="12px" textAlign="center" color="gray.200" >
                            Military
                        </Text>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%" >
                        <Image w="30px" mb={3} src={Trust} />
                        <Text fontSize="12px" lineHeight={1.2} textAlign="center" color="gray.200" >
                            Trust
                        </Text>
                    </Flex>
                </Grid>

                <Grid templateColumns="repeat(3,1fr)" gap="6px" alignItems="flex-start" justifyContent="space-between">
                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%"  >
                        <Image w="35px" mb={2} src={BankOwned} />
                        <Text fontSize="12px" textAlign="center" color="gray.200" lineHeight={1.2}>
                            Bank Owned
                        </Text>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%" >
                        <Image w="30px" mb={3} src={OutOfState} />
                        <Text fontSize="12px" textAlign="center" color="gray.200" lineHeight={1.2}>
                            Out of State
                        </Text>
                    </Flex>

                    <Flex flexDir="column" alignItems="center" justifyContent="flex-start" height="100%" >
                        <Image w="30px" mb={3} src={Number} />
                    </Flex>
                </Grid>

            </Box>
        </Flex>
    )
}

export default CardLayout;