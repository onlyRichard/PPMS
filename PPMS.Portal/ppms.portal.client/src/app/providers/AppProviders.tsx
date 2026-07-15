/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: AppProviders.tsx
 * Responsibility:
 * Registers all global React providers.
 * ============================================================
 */
import type { PropsWithChildren } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "../theme/theme";
export default function AppProviders({
    children
}: PropsWithChildren) {

    return (

        <ThemeProvider theme={theme}>

            <CssBaseline />

            {children}

        </ThemeProvider>

    );

}