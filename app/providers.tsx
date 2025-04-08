"use client";

import { ReactElement } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material";
import darkTheme from "./dark.theme";
import { AuthContext } from "./auth/auth-context";

interface ProviderProps {
  children: ReactElement[];
  authenticated: boolean
}

export default function Providers({ children, authenticated }: ProviderProps) {
  // const isAuthenticated = await authenticated();
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={darkTheme}> 
        <AuthContext.Provider value={authenticated}>
          {children}
          {authenticated ? <div>Authenticated</div> : <div>Not Authenticated</div>}
        </AuthContext.Provider>
        {/* <AuthContext.Provider value={isAuthenticated}>
          {children}
        </AuthContext.Provider> */}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}