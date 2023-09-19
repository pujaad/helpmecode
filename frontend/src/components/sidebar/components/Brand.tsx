// Chakra imports
import { Box, Flex, useColorModeValue, Image } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";
import logo from "assets/img/layout/logo.png";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
       <Box sx={{p: "0 30px 20px 10px"}}>
        <Image src={logo} width={"250px"} />
       </Box>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
