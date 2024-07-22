import { Flex, Icon, Text } from "@chakra-ui/react"
import { AiOutlineMenu } from 'react-icons/ai';
import {BiSearch,BiBell } from 'react-icons/bi';

const MobileMenu = () => {

    const menuFlexStyleProp = {
        pl: "4",
        pr: "4",
        align: "center",
        justifyContent: "space-between",
        w: "100%",
        flexDirection: "row"
    }

    const menuIconStyleProp = {
        fontSize: "2xl",
        fontWeight: "bold",
        color: "gray.900"
    }

    const menuHeadingStyleProp = {
        fontSize: "2xl",
        fontWeight: "bold",
        color: "gray.800",
        d: "inline-flex",
        align: "center"
    }


    return (
        <Flex {...menuFlexStyleProp}>
            <Icon as={AiOutlineMenu} {...menuIconStyleProp} />
            <Text  {...menuHeadingStyleProp} >Property <Text pl="3px" fontWeight="normal"> Data</Text></Text>
            <Text mt="1">
                <Icon as={BiSearch} {...menuIconStyleProp} mr="3px" />
                <Icon as={BiBell} {...menuIconStyleProp} />
            </Text>
        </Flex>
    )
}

export default MobileMenu;