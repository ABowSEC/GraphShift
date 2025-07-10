import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Textarea,
  Input,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';

const SubmitPage: React.FC = () => {
  const [tip, setTip] = useState('');
  const [file, setFile] = useState<File | null>(null);

  /**
   * Handles the submission of tip text and file upload.
   * Logs the current tip and file to the console.
   */
  const handleSubmit = () => {
    // Check if there is a tip or file to submit
    if (!tip && !file) {
      console.warn('No tip or file provided for submission.');
      return;
    }

    // Log the tip and file being submitted
    console.log('Submitting:', tip, file);

    // TODO: Implement the logic to handle the submission of the tip and file
  };

  return (
    <Box p={8} maxW="2xl" mx="auto">
      <Heading mb={4}>Submit a Tip or Document</Heading>
      <Text mb={6}>Paste information or upload a supporting document. We respect your privacy.</Text>
      <VStack spacing={4} align="stretch">
        <FormControl id="tip">
          <FormLabel>Tip Description</FormLabel>
          <Textarea
            placeholder="Your message…"
            rows={6}
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </FormControl>
        <FormControl id="document">
          <FormLabel>Upload Document (PDF, DOCX)</FormLabel>
          <Input
            type="file"
            accept=".pdf,.docx"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </FormControl>
        <Button colorScheme="blue" onClick={handleSubmit}>Send Securely</Button>
      </VStack>
    </Box>
  );
};

export default SubmitPage;