import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseProvider } from './integrations/supabase/index.js';
import { SupabaseAuthProvider } from './integrations/supabase/auth.jsx';
import { logFileModification } from './utils/fileLogger.js';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

// Log that this file has been modified
logFileModification('src/main.jsx');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SupabaseProvider>
      <ChakraProvider theme={theme}>
        <SupabaseAuthProvider>
          <App />
        </SupabaseAuthProvider>
      </ChakraProvider>
    </SupabaseProvider>
  </React.StrictMode>
);