"use client";

import { ReactElement } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./dark.theme";
import { AuthContext } from "./auth/auth-context";

interface ProviderProps {
  children: ReactElement[];
}

export default function Providers({ children }: ProviderProps) {
  // const isAuthenticated = await authenticated();
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}> 
        <AuthContext.Provider value={false}>
          {children}

        </AuthContext.Provider>
        {/* <AuthContext.Provider value={isAuthenticated}>
          {children}
        </AuthContext.Provider> */}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}