import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSupabaseAuth, SupabaseAuthUI } from '../integrations/supabase/auth.jsx';
import { Box, Heading, Container } from '@chakra-ui/react';

const Login = () => {
    const { session } = useSupabaseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (session) {
            navigate('/');
        }
    }, [session, navigate]);

    return (
        <Container maxW="container.md" centerContent>
            <Box padding="4" maxWidth="400px" width="100%">
                <Heading as="h1" size="xl" textAlign="center" mb={6}>Login</Heading>
                <SupabaseAuthUI />
            </Box>
        </Container>
    );
};

export default Login;
