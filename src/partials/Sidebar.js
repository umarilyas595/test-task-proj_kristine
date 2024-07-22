import { VStack, Image, Box } from "@chakra-ui/react"
import logo from '../assets/image/logo.svg'

import { Icon } from "@chakra-ui/react"
import { BiHomeAlt } from "react-icons/bi"
import { BiSearch } from "react-icons/bi"
import { FiSidebar, FiMap } from "react-icons/fi"
import { GiEarthAmerica } from "react-icons/gi"
import { AiFillCar } from "react-icons/ai"
import { BsFillLightningFill } from "react-icons/bs"


function Sidebar() {

  const logoImageStyles = {
    w: "100%",
    cursor: "pointer",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column"
  }

  const iconBgStyles = {
    w: "100%",
    cursor: "pointer",
    alignItems: "flex-end",
    justifyContent: "center",
    pr: "4",
    bg: "transparent",
    color: "blue.600",
    minH: "40px",
    d: "flex",
    rounded: "0 50px 50px 0px",
    flexDirection: "column"
  }

  const activeIconBgStyles = {
    ...iconBgStyles,
    fontWeight: "bold",
    bg: "blue.600",
    color: "white",
  }

  const iconStyles = {
    fontSize: "24px", fontWeight: "bold"
  }

  return (
    <VStack  spacing={10} mt="3">

      <Box {...logoImageStyles}  >
        <Image src={logo} ml="auto" mr={2} />
      </Box>

      <Box {...iconBgStyles} _hover={{
        ...activeIconBgStyles
      }} >
        <Icon {...iconStyles} as={BiHomeAlt} />
      </Box>

      <Box _hover={{
        ...activeIconBgStyles
      }}  {...activeIconBgStyles}>
        <Icon {...iconStyles} as={BiSearch} />
      </Box>

      <Box _hover={{
        ...activeIconBgStyles
      }}  {...iconBgStyles} >
        <Icon {...iconStyles} as={FiSidebar} />
      </Box>

      <Box _hover={{
        ...activeIconBgStyles
      }} {...iconBgStyles} >
        <Icon {...iconStyles} as={GiEarthAmerica}></Icon>
      </Box>

      <Box {...iconBgStyles} _hover={{
        ...activeIconBgStyles
      }} >
        <Icon {...iconStyles} as={AiFillCar} />
      </Box>

      <Box {...iconBgStyles} _hover={{
        ...activeIconBgStyles
      }} >
        <Icon {...iconStyles} as={BsFillLightningFill} />
      </Box>

      <Box {...iconBgStyles} _hover={{
        ...activeIconBgStyles
      }} >
        <Icon {...iconStyles} as={FiMap} />
      </Box>

    </VStack>
  );
}

export default Sidebar;
