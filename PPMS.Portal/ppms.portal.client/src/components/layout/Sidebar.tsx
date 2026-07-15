/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: Sidebar.tsx
 * Responsibility:
 * Enterprise application sidebar.
 * ============================================================
 */

import { Box, Divider } from "@mui/material";
import Logo from "./Logo";
import SidebarGroup from "./SidebarGroup";
import SidebarFooter from "./SidebarFooter";
import { SidebarConfig } from "./sidebar.config";

export default function Sidebar() {
    return (
        <Box
            sx={{
                width: 280,
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#071A38",
                borderRight: "1px solid rgba(255,255,255,.08)"
            }}
        >
            <Logo />

            <Box
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    py: 1
                }}
            >
                {SidebarConfig.map((section, index) => (
                    <Box key={index}>
                        <SidebarGroup section={section} />
                        {index !== SidebarConfig.length - 1 && (
                            <Divider
                                sx={{
                                    mx: 2,
                                    borderColor: "rgba(255,255,255,.08)"
                                }}
                            />
                        )}
                    </Box>
                ))}
            </Box>

            <SidebarFooter />
        </Box>
    );
}