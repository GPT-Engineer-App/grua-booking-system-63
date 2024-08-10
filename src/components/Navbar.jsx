import { Box, Flex, Link, Spacer, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold">Tow Service</Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>Home</Link>
          <Link as={RouterLink} to="/about" p={2} mx={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>About</Link>
          <Link as={RouterLink} to="/contact" p={2} mx={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>Contact</Link>
          {session && (
            <>
              <Link as={RouterLink} to="/booking" p={2} mx={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>Book Now</Link>
              <Link as={RouterLink} to="/profile" p={2} mx={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>Profile</Link>
              <Button onClick={logout} colorScheme="red" size="sm" ml={2}>Logout</Button>
            </>
          )}
          {!session && (
            <Link as={RouterLink} to="/login" p={2} mx={2} _hover={{ textDecoration: "none", bg: "blue.600" }}>Login</Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
