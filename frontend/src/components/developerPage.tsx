import { useAuth0 } from "@auth0/auth0-react";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { ChangeEvent, useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";

import Card from "./card/Card";

//------------------------------------------------------------------------------------------------------

export default function Developer() {
  // const [tags, setTags] = useState<string[]>([]);
  const [tag, setTag] = useState<string>("");
  const [resumes, setResumes] = useState<File | null>(null);
  const [mail, setMail] = useState<string>("");
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const CreateDeveloper = gql`
    mutation CreateDeveloper(
      $name: String!
      $email: String!
      $resume: String!
      $tags: String!
    ) {
      createDeveloper(
        name: $name
        email: $email
        resume: $resume
        tags: $tags
      ) {
        id
        name
        email
      }
    }
  `;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const [createDeveloper, { data, loading, error }] =
    useMutation(CreateDeveloper);

  function convertFileToBytea(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const byteaArray = new Uint8Array(arrayBuffer);
        const byteaString = byteaArray.reduce(
          (str, byte) => str + String.fromCharCode(byte),
          ""
        );
        const encodedByteaString = btoa(byteaString);
        resolve(encodedByteaString);
      };

      reader.onerror = () => {
        reject(new Error("Failed to read the file."));
      };

      reader.readAsArrayBuffer(file);
    });
  }

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };

  const handleResumesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setResumes(file);
  };
  const handleMailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMail(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!resumes) {
      console.error("No resume file selected.");
      return;
    }

    try {
      const byteaString = await convertFileToBytea(resumes);
      await createDeveloper({
        variables: {
          name: user.name,
          email: mail,
          resume: byteaString,
          tags: tag,
        },
      });
    } catch (error) {
      console.error("Failed to convert file to bytea string:", error);
    }
    setIsSubmitted(true);
  };
  useEffect(() => {
    if (isSubmitted) {
      history.push("/admin/submit");
    }
  }, [isSubmitted, history]);

  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <SimpleGrid gap="20px" mb="20px">
          <Card sx={{padding: "30px 40px"}}>
            <FormControl mt="20px">
              <FormLabel>Name</FormLabel>
              <Input
                type="email"
                onChange={handleMailChange}
                value={user.name}
                disabled
              />
            </FormControl>

            <FormControl mt="20px">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                onChange={handleMailChange}
              />

            </FormControl>

            <FormControl mt="20px">
              <FormLabel>Resume</FormLabel>
              <Input
                type="file"
                placeholder="resume"
                onChange={handleResumesChange}
                sx={{padding: "4px 0 0 4px"}}
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
