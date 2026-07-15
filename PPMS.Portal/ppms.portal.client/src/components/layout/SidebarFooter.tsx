/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: SidebarFooter.tsx
 * Responsibility:
 * Displays the sidebar footer.
 * ============================================================
 */

import {
    Avatar,
    Box,
    Divider,
    Typography
} from "@mui/material";

export default function SidebarFooter() {
    return (
        <>
            <Divider
                sx={{
                    borderColor: "rgba(255,255,255,.08)",
                    my: 1
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    px: 2.5,
                    py: 2
                }}
            >
                <Avatar
                    sx={{
                        width: 42,
                        height: 42,
                        bgcolor: "#1976D2"
                    }}
                >
                    L
                </Avatar>

                <Box sx={{ flex: 1 }}>
                    <Typography
                        sx={{
                            color: "#FFFFFF",
                            fontSize: 14,
                            fontWeight: 600
                        }}
                    >
                        Richard Pogi
                    </Typography>

                    <Typography
                        sx={{
                            color: "#94A3B8",
                            fontSize: 12
                        }}
                    >
                        System Administrator
                    </Typography>
                </Box>
            </Box>
        </>
    );
}