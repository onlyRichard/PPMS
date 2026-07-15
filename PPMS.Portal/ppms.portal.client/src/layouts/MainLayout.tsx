/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: MainLayout.tsx
 * Responsibility:
 * Main application layout.
 * ============================================================
 */

import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/layout";

export default function MainLayout() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                backgroundColor: "#F5F7FB"
            }}
        >
            <Sidebar />

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minWidth: 0
                }}
            >
                <Box
                    sx={{
                        height: 72,
                        bgcolor: "#FFFFFF",
                        borderBottom: "1px solid #E5E7EB",
                        display: "flex",
                        alignItems: "center",
                        px: 4,
                        fontWeight: 600,
                        flexShrink: 0
                    }}
                >
                    Topbar
                </Box>

                <Box
                    component="main"
                    sx={{
                        flex: 1,
                        overflow: "auto",
                        p: 4
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </Box>
    );
}