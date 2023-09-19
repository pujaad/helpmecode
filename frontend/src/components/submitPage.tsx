import { useQuery, gql } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";

import { ChangeEvent, useEffect, useState } from "react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Box,
  Button,
  SimpleGrid,
  InputGroup,
  InputLeftElement,
  Grid,
  GridItem,
  Center,
  InputRightElement,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Card from "./card/Card";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { JsxElement } from "typescript";
//------------------------------------------------------------------------------------------
interface developerData {
  id: number;
  name: String;
  email: String;
  tags: String[];
}

export default function SubmitPage() {
  const GetDeveloper = gql`
    query {
      getDevelopers {
        id
        name
        email

        tags
      }
    }
  `;
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const { loading, error, data } = useQuery(GetDeveloper);
  if (!data?.getDevelopers) {
    return null;
  }
  return data?.getDevelopers?.map(
    ({
      id,
      name,
      email,

      tags,
    }: developerData) => (
      <div key={id}>
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
          <SimpleGrid gap="10px" mb="20px" marginTop={3}>
            <Card>
              <FormControl>
                <FormLabel paddingLeft={4}>{user.name}</FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel paddingLeft={4}>{email}</FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel paddingLeft={4}>{tags}</FormLabel>
              </FormControl>
            </Card>
          </SimpleGrid>
        </Box>
      </div>
    )
  );
}
