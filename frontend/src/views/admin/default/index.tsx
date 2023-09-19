/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";


import "./styles.css";
import Card from "components/card/Card";
import { useHistory } from "react-router-dom";
import { MouseEvent } from "react";

export default function UserReports() {
  
  const history = useHistory();
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    history.push("/admin/need-developer");
  };
  const handleOnClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    history.push("/admin/developer");
  };

  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }} p={3}>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" mb="20px" mt="100px">
          <Card
            onClick={handleClick}
            sx={{
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 25,
              textAlign: "center",
              backgroundColor: "",
            }}
          >
            <h3>I need a developer</h3>
            <p className="text">I am currently spearheading a project and have come to realize the pressing need for a skilled developer. My vision for this endeavor is clear, but I lack the necessary technical prowess to bring it to fruition. The intricate details and complexities of the task surpass my capabilities. Therefore, I am in search of a proficient developer who can step in and provide the expertise required to drive this project forward successfully.</p>
          </Card>
          <Card
            onClick={handleOnClick}
            sx={{
              fontFamily: "Times New Roman, Times, serif",
              fontSize: 25,
              textAlign: "center",
              backgroundColor: "pink",
            }}
          >
            <h3>I am a developer</h3>
            <p className="text">I am a skilled developer with a passion for coding. My proficiency in software development has equipped me with the tools and expertise required to create solutions for diverse challenges. Eager to leverage my capabilities, I am interested in earning extra income by assisting others. Whether it's troubleshooting, creating new applications, or offering technical advice, I'm here to help those in need of my skills.</p>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
}
