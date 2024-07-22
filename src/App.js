import './App.css';
import { Container, Flex, Grid, useMediaQuery } from "@chakra-ui/react"
import Sidebar from './partials/Sidebar';
import MainBody from './partials/MainBody';
import MobileMenu from './partials/MobileMenu';
import MobileBanner from './partials/MobileBanner';
import MobileCardLayout from './partials/MobileCardLayout';
import MobilePrintInvoiceCards from './partials/MobilePrintInvoiceCards';

function App() {

  const [lowerThan992] = useMediaQuery("(max-width: 992px)")

  const mainBodyStyling = {
    align: "flex-start", rounded: "50px", minH: "100vh", mt: "0", mr: "4"
  }

  const mobileBodyFlexStyleProp = {
    mt: "1", mb: "1", pt: "1", pb: "1", pl:"0",pr:"0", flexDirection: "column"
  }

  return (
    lowerThan992 ? (
      <Container maxW="container.xl" pl={0} pr={0}>
        <Flex {...mobileBodyFlexStyleProp}>
          <MobileMenu />
          <MobileBanner />
          <MobileCardLayout />
          <MobilePrintInvoiceCards />
        </Flex>
      </Container>
    ) : (

      <Flex {...mainBodyStyling} minH="100vh" >
        <Grid templateColumns="10% 90%" w="100%" minH="100vh">
          <Sidebar />
          <MainBody />
        </Grid>
      </Flex>
    )
  );
}

export default App;
