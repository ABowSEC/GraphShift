import React from 'react';
import { NavLink } from 'react-router-dom';
import { Text, Link as ChakraLink } from '@chakra-ui/react';

interface RouterLinkProps {
  to: string;
  children: React.ReactNode;
}

/**
 * A component that wraps a React Router `NavLink` to provide a custom
 * link component with Chakra UI styles.
 *
 * @param {string} to The route to navigate to when the link is clicked.
 * @param {*} children The content of the link.
 * @returns {ReactElement} A rendered `RouterLink` component.
 */
const RouterLink: React.FC<RouterLinkProps> = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        // Set the font weight to bold if the link is active.
        fontWeight: isActive ? 600 : 400,
        // Set the color to the Chakra UI primary color if the link is active.
        color: isActive ? '#3182ce' : undefined,
        // Set the text decoration to underline if the link is hovered.
        textDecoration: 'none',
      })}
    >
      <ChakraLink _hover={{ textDecoration: 'underline' }}>
        {/* Wrap the children in a `Text` component to provide a consistent
        font style. */}
        <Text>{children}</Text>
      </ChakraLink>
    </NavLink>
  );
};

export default RouterLink;
