// src/pages/Home.tsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Divider,
  Button,
  Icon,
  useColorModeValue,
  Flex,
  Spacer,
  Badge,
  StatGroup,
  Stat,
  StatNumber,
  StatLabel,
} from '@chakra-ui/react';
import { ArrowForwardIcon, AtSignIcon } from '@chakra-ui/icons';
import ArticleCard from '../components/ArticleCard';
import type { Article } from '../types';



const animationStyles = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// ─── Mock data (replace with real API later) ────────────────────────────────
const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Whistleblower Exposes Industry Lobbying Scandal',
    summary:
      'Internal memos reveal direct influence over federal regulations.',
    content: '',
    category: 'industry',
    tags: ['lobbying', 'regulations', 'scandal'],
    sources: [],
    publishedAt: new Date('2024-06-20'),
    updatedAt: new Date(),
    verificationLevel: 'verified',
    author: 'Admin',
    slug: 'industry-lobbying-scandal',
  },
  {
    id: '2',
    title: 'FOIA Docs Uncover Police Facial-Recognition Roll-out',
    summary:
      'State agencies quietly adopted facial-recognition tech without oversight.',
    content: '',
    category: 'law-enforcement',
    tags: ['foia', 'police', 'facial-recognition'],
    sources: [],
    publishedAt: new Date('2024-06-18'),
    updatedAt: new Date(),
    verificationLevel: 'pending',
    author: 'ResearchTeam',
    slug: 'police-surveillance-foia',
  },
  {
    id: '3',
    title: 'Corporate Tax Haven Network Exposed',
    summary:
      'Leaked documents reveal systematic offshore tax avoidance scheme.',
    content: '',
    category: 'industry',
    tags: ['tax-avoidance', 'offshore', 'corruption'],
    sources: [],
    publishedAt: new Date('2024-06-15'),
    updatedAt: new Date(),
    verificationLevel: 'verified',
    author: 'FinanceTeam',
    slug: 'corporate-tax-haven',
  },
];
// ────────────────────────────────────────────────────────────────────────────

const Home: React.FC = () => {
  /* Dark-/light variants */
  const heroBg = useColorModeValue('gray.900', 'gray.700');
  const heroText = useColorModeValue('white', 'gray.100');
  const sectionBg = useColorModeValue('white', 'gray.800');
  const pageBg = useColorModeValue('gray.50', 'gray.900');

  return (

    
    <Box bg={pageBg} minH="100vh">
      {/* ─── Hero Section ───────────────────────────────────────────────── */}
      <style>{animationStyles}</style>
      <Box
        bg={heroText}
        color={heroText}
        py={{ base: 20, md: 32 }}
        textAlign="center"
        background="linear-gradient(45deg,rgb(0, 81, 243) 0%,rgb(49, 52, 196) 25%,rgb(255, 255, 241) 50%,rgb(203, 41, 41) 75%,rgb(234, 4, 4) 100%)"
        backgroundSize="400% 400%"
        animation="gradientShift 12s ease infinite"
        position="relative"
        overflow="hidden"

      >
        <VStack spacing={8} maxW="4xl" mx="auto" px={4}>
          <VStack spacing={4}>
            <Heading size="3xl" fontWeight="bold">
              GraphShift
            </Heading>
            <Text fontSize="xl" opacity={0.9} lineHeight="tall">
              Independent Analysis, Live Tracking, Smart Investing.  
              Uncover the truth behind Drops, Rises, and Crashes.
            </Text>
          </VStack>

          {/* Call-to-action buttons */}
          <HStack spacing={6} flexWrap="wrap" justify="center">
            <Button
              colorScheme="blue"
              size="lg"
              rightIcon={<ArrowForwardIcon />}
              as="a"
              href="/submit"
              _hover={{ transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              Submit a Tip
            </Button>
            <Button
              variant="outline"
              size="lg"
              rightIcon={<Icon as={AtSignIcon} />}
              as="a"
              href="/subscribe"
              borderColor="white"
              color="white"
              _hover={{ bg: 'whiteAlpha.200', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
            >
              Donate
            </Button>
          </HStack>
        </VStack>
      </Box>

      {/* ─── Stats Section ──────────────────────────────────────────────── */}
      <Box px={{ base: 4, md: 8 }} py={8}>
        <StatGroup
          bg={sectionBg}
          p={8}
          borderRadius="lg"
          shadow="md"
          maxW="6xl"
          mx="auto"
        >
          {/* TODO: Add a link to count records instead DNE */}

          <Stat textAlign="center">
            <StatNumber fontSize="3xl" color="blue.600">%</StatNumber>
            <StatLabel color="gray.600">Avg Change Today</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="3xl" color="green.600">%</StatNumber>
            <StatLabel color="gray.600">Weekly Change</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="3xl" color="purple.600">%</StatNumber>
            <StatLabel color="gray.600">Yearly Change</StatLabel>
          </Stat>
          <Stat textAlign="center">
            <StatNumber fontSize="3xl" color="orange.600">decline</StatNumber>
            <StatLabel color="gray.600">Outlook</StatLabel>
          </Stat>
        </StatGroup>
      </Box>

      {/* ─── Recent Reports Grid ───────────────────────────────────────── */}
      <Box px={{ base: 4, md: 8 }} py={8}>
        <Flex align="end" mb={8} maxW="6xl" mx="auto">
          <VStack align="start" spacing={2}>
            <Heading as="h2" size="xl">
              Recent Reports
            </Heading>
            <Text color="gray.600" fontSize="lg">
              Latest News
            </Text>
          </VStack>
          <Spacer />
          <Text 
            color="blue.600" 
            fontWeight="semibold" 
            cursor="pointer"
            _hover={{ textDecor: 'underline' }}
          >
            View All Reports 
          </Text>
        </Flex>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={6} 
          maxW="6xl" 
          mx="auto"
        >
          {mockArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </SimpleGrid>
      </Box>

      {/* ─── Featured Categories ────────────────────────────────────────── */}
      <Box px={{ base: 4, md: 8 }} py={8}>
        <VStack spacing={6} maxW="6xl" mx="auto">
          <Heading as="h3" size="lg" textAlign="center">
            Trading Categories
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
            <Box
              bg={sectionBg}
              p={6}
              borderRadius="lg"
              shadow="sm"
              textAlign="center"
              _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              cursor="pointer"
            >
              <Badge colorScheme="purple" mb={3} fontSize="xs">Tech</Badge>
              <Text fontWeight="semibold" mb={2}>Main Tech Sector</Text>
              <Text fontSize="sm" color="gray.600">
                Tech Companies
              </Text>
            </Box>
            <Box
              bg={sectionBg}
              p={6}
              borderRadius="lg"
              shadow="sm"
              textAlign="center"
              _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              cursor="pointer"
            >
              <Badge colorScheme="red" mb={3} fontSize="xs">Meidcal</Badge>
              <Text fontWeight="semibold" mb={2}>Medical Sector</Text>
              <Text fontSize="sm" color="gray.600">
                Main Stocks
              </Text>
            </Box>
            <Box
              bg={sectionBg}
              p={6}
              borderRadius="lg"
              shadow="sm"
              textAlign="center"
              _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
              transition="all 0.2s"
              cursor="pointer"
            >
              <Badge colorScheme="blue" mb={3} fontSize="xs">CORPORATE</Badge>
              <Text fontWeight="semibold" mb={2}>Industry Watchdog</Text>
              <Text fontSize="sm" color="gray.600">
                Concerning documents
              </Text>
            </Box>
          </SimpleGrid>
        </VStack>
      </Box>

      {/* ─── Commitment Section ─────────────────────────────────────────── */}
      <Box px={{ base: 4, md: 8 }} py={12}>
        <Box
          bg={sectionBg}
          p={12}
          shadow="lg"
          borderRadius="xl"
          textAlign="center"
          maxW="5xl"
          mx="auto"
        >
          <VStack spacing={6}>
            <Heading size="xl">Our Commitment to Truth</Heading>
            <Text maxW="4xl" color={useColorModeValue('gray.600', 'gray.300')} fontSize="lg" lineHeight="tall">
              Every report is Checked through our database to provide accurate market outlooks.
            </Text>
            <Divider maxW="200px" />
            <Text fontSize="md" fontStyle="italic" color="gray.500">
              "The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion." - Albert Camus
            </Text>{/* Quote DB TODO: Add a quote API???*/}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;