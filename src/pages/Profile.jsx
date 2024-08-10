import React from 'react';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { useSupabaseAuth } from '../integrations/supabase/auth.jsx';

const Profile = () => {
  const { session } = useSupabaseAuth();

  return (
    <Box p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">User Profile</Heading>
        {session ? (
          <>
            <Text>Email: {session.user.email}</Text>
            <Text>User ID: {session.user.id}</Text>
            {/* Add more user details as needed */}
          </>
        ) : (
          <Text>Please log in to view your profile.</Text>
        )}
      </VStack>
    </Box>
  );
};

export default Profile;
