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
import { Sidebar, Topbar } from "../components/layout";


export default function MainLayout() {
    const currentUser = {
        id: 1,
        fullName: "Richard Pogi",
        role: "System Administrator"
    };
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
                <Topbar user={currentUser} />

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