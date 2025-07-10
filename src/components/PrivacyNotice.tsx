import React, { useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box,
  Text,
  Link,
  VStack,
  CloseButton,
} from '@chakra-ui/react';

/**
 * A component that displays a privacy notice to users.
 * The component is dismissed when the user closes it.
 */
const PrivacyNotice: React.FC = () => {
  const [visible, setVisible] = useState(true);

  // If the notice has been dismissed, don't render it again.
  if (!visible) return null;

  return (
    <Alert status="info" borderRadius="md" position="relative">
      <AlertIcon />
      <Box>
        <AlertTitle>Privacy & Security</AlertTitle>
        <AlertDescription>
          <VStack align="start" spacing={2} mt={2}>
            <Text fontSize="sm">
              Your privacy and security are our top priorities. All data is encrypted,
              and we never track or store personal information.
            </Text>
            <Text fontSize="sm">
              Contributors can submit information anonymously through our secure channels.
            </Text>
            <Link
              href="/privacy-policy"
              fontSize="sm"
              color="blue.500"
              // Open the privacy policy in a new tab.
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our full Privacy Policy
            </Link>
          </VStack>
        </AlertDescription>
      </Box>
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        onClick={() => setVisible(false)}
        // When the user clicks the close button, hide the notice.
      />
    </Alert>
  );
};

export default PrivacyNotice;
