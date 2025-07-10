// src/components/Header.tsx
import React from 'react';
import {
  Box,
  Flex,
  HStack,
  VStack,
  IconButton,
  Button,
  useColorMode,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Badge,
} from '@chakra-ui/react';
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  LockIcon,
  HamburgerIcon,
} from '@chakra-ui/icons';
import RouterLink from './RouterLink';

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg           = useColorModeValue('white',    'gray.800');
  const borderColor  = useColorModeValue('gray.200', 'gray.700');
  const navLinks = [
    { label: 'Government',      to: '/government' },
    { label: 'Law Enforcement', to: '/law-enforcement' },
    { label: 'Industry',        to: '/industry' },
    { label: 'FOIA Requests',   to: '/foia' },
    { label: 'Docs',         to: '/documents' },
  ];

  return (
    <Box bg={bg} borderBottom="1px" borderColor={borderColor} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <RouterLink to="/">
          <Text fontSize="xl" fontWeight="bold" color="red.500">
            The Oversight Report
          </Text>
        </RouterLink>

        {/* ── Desktop Nav ─────────────────────────────────────── */}
        <HStack
          as="nav"
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
        >
          {navLinks.map((link) => (
            <RouterLink key={link.to} to={link.to}>
              {link.label}
            </RouterLink>
          ))}
        </HStack>

        {/* ── Right-side controls / mobile menu ───────────────── */}
        <HStack spacing={4}>
          <Badge colorScheme="green" variant="subtle">
            <LockIcon boxSize={3} mr={1} />
            Secure
          </Badge>
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            variant="ghost"
            size="sm"
          />
          <IconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
            size="sm"
          />
          <Button
            as={RouterLink}
            to="/submit"
            colorScheme="blue"
            size="sm"
          >
            Submit Tip
          </Button>

          {/* ── Mobile hamburger ─────────────────────────────── */}
          <Menu>
            <MenuButton
              display={{ base: 'inline-flex', md: 'none' }}
              as={IconButton}
              aria-label="Open navigation menu"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {navLinks.map((link) => (
                <MenuItem as={RouterLink} to={link.to} key={link.to}>
                  {link.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
