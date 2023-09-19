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
import { ChevronDownIcon } from "@chakra-ui/icons";
import Card from "./card/Card";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

// -----------------------------------------------------------------------

export default function Nextpage() {
  const [text, setText] = useState("");
  const [detail, setDetail] = useState("");
  const [tag, setTag] = useState<string>("");

  const history = useHistory();

  const CreateJobs = gql`
    mutation CreateJobs(
      $title: String!
      $details: String!
      $tags: String!
      $company_id: Int!
    ) {
      createJob(
        title: $title
        details: $details
        tags: $tags
        company_id: $company_id
      ) {
        id
        title
        details
      }
    }
  `;

  const [createJob, { data, loading, error }] = useMutation(CreateJobs);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetail(event.target.value);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createJob({
      variables: { title: text, details: detail, tags: tag, company_id: 1 },
    });
    setIsSubmitted(true);
  };
  useEffect(() => {
    if (isSubmitted) {
      // TODO: Fix route
      history.push("/admin/duser");
    }
  }, [isSubmitted, history]);

  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid gap="20px" mb="20px">
          <Card p="40px">
            <FormControl mt="20px">
              <FormLabel>Job Title</FormLabel>
              <Input
                type="text"
                mb={5}
                value={text}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt="20px">
              <FormLabel>Summary</FormLabel>
              <Textarea
                value={detail}
                onChange={handleInputChange}
                size="sm"
                sx={{borderRadius: "5px"}}
              />
            </FormControl>
            <FormControl mt="20px">
              <FormLabel>Tags</FormLabel>
              <Input
                type="text"
                mb={5}
                onChange={handleTagChange}
              />
            </FormControl>

            <Stack margin={5} align="center">
              <Button variant="brand" size="md" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Card>
        </SimpleGrid>
      </Box>
    </>
  );
}
