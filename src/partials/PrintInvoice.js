import { Box, Text, Flex, Heading, Image, Grid, Divider, Icon, Button } from "@chakra-ui/react"
import { AiOutlinePrinter } from "react-icons/ai";
import Range from "../assets/image/range.svg";
const PrintInvoice = () => {

    const whiteBoxStyleProps = {
        bg: "white",
        pt: "2",
        pb: "3",
        pl: "3",
        pr: "3",
        rounded: "8",
        boxShadow: "sm",
        w: "100%",
        pos: "relative"
    }

    const absoluteIconStyleProp = {
        pos: "absolute",
        fontSize: "2xl",
        fontWeight: "bold",
        color: "blue.500",
        top: "2",
        right: "4",
    }

    const invoiceWhiteBoxStyleProps = {
        ...whiteBoxStyleProps,
        pt: "3",
        pb: "3"
    }

    return (

        < Flex alignItems="center" flexDir="column" pl={6} >
            <Box  {...whiteBoxStyleProps} mb={3}>
                <Icon {...absoluteIconStyleProp} as={AiOutlinePrinter} />
                <Heading fontSize="md" as="h1" textShadow="1px 0 gray" color="gray.500" fontWeight="bolder" textAlign="center"  >
                    Propelio Value
                </Heading>
                <Heading fontSize="4xl" color="black" textShadow="1px 0 black" textAlign="center" >
                    $771,000
                </Heading>
                <Image w="100%" src={Range} />
                <Grid templateColumns="repeat(2,1fr)" alignItems="space-between" w="100%" >
                    <Text fontSize="xs" color="gray.800">
                        <Text fontWeight="bold">600,000</Text>
                        $143/ sqft
                    </Text>
                    <Text textAlign="right" fontSize="xs" color="gray.800">
                        <Text fontWeight="bold">800,000</Text>
                        $243/ sqft
                    </Text>
                </Grid>
            </Box>

            <Box  {...invoiceWhiteBoxStyleProps} >

                <Grid templateColumns="repeat(2,1fr)" alignItems="space-between" w="100%" >
                    <Text fontSize="sm" color="gray.900">
                        Est Equity
                    </Text>
                    <Text textAlign="right" fontWeight="bold" fontSize="sm" color="gray.900">
                        $210,000
                    </Text>
                </Grid>

                <Divider mt={1} mb={1} />

                <Grid templateColumns="repeat(2,1fr)" alignItems="space-between" w="100%" >
                    <Text fontSize="sm" color="gray.900">
                        Last Sale Price
                    </Text>
                    <Text textAlign="right" fontWeight="bold" fontSize="sm" color="gray.900">
                        $275,000
                    </Text>
                </Grid>
                <Divider mt={1} mb={1} />
                <Grid templateColumns="repeat(2,1fr)" alignItems="space-between" w="100%" >
                    <Text fontSize="sm" color="gray.900">
                        Last Sale Date
                    </Text>
                    <Text textAlign="right" fontWeight="bold" fontSize="sm" color="gray.900">
                        09/10/2020
                    </Text>
                </Grid>
                <Divider mt={1} mb={1} />
                <Button bg="#0770BA" color="white" mt={2} ml="auto" mr="auto" minW="80%" height="24px" d="block" size="sm" w="max-content" rounded="50px">Run Comps / CMA</Button>
            </Box>

        </Flex >
    )
}

export default PrintInvoice;