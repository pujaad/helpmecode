// Chakra imports
import { Flex, Box, Icon, Text, Spacer } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";

// Assets
import bgMastercard from "assets/img/dashboards/Debit.png";

interface IBannerProps {
  children: React.ReactNode;
}

export default function Banner(props: IBannerProps) {
  // Chakra Color Mode
  return (
    <Card
      backgroundImage={bgMastercard}
      backgroundRepeat="no-repeat"
      bgSize="cover"
      alignSelf="center"
      w={{ base: "100%", md: "60%", xl: "99%" }}
      bgPosition="10%"
      mx="auto"
      p="20px"
    >
      <Flex direction="column" color="white" h="100%" w="100%">
        {props.children}
      </Flex>
    </Card>
  );
}
