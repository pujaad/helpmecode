import { useQuery, gql } from "@apollo/client";

import {
  FormControl,
  FormLabel,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import Card from "./card/Card";

interface jobData {
  id: number;
  title: string;
  details: string;
  tags: string[];
  company_id: number;
}

export default function Developer(): JSX.Element {
  const GetJobs = gql`
    query {
      getJobs {
        id
        title
        details
        tags
        company_id
      }
    }
  `;
  const { loading, error, data } = useQuery(GetJobs);

  if (!data?.getJobs) {
    return null;
  }
  return data?.getJobs?.map(
    ({ id, title, details, tags, company_id }: jobData) => (
      <div key={id}>
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
          <SimpleGrid gap="10px" mb="20px" marginTop={3}>
            <Card>
              <FormControl>
                <FormLabel paddingLeft={4}>{title}</FormLabel>
              </FormControl>
              <FormControl>
                <FormLabel paddingLeft={4}>{details}</FormLabel>
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
