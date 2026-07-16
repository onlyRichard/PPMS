/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: UserProfileMenu.tsx
 * Responsibility:
 * Displays the logged in user.
 * ============================================================
 */

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import {
    Avatar,
    Box,
    IconButton,
    Typography
} from "@mui/material";

export default function UserProfileMenu() {
    return (
        <IconButton
            sx={{
                borderRadius: 3,
                px: 1,
                "&:hover": {
                    bgcolor: "#F8FAFC"
                }
            }}
        >
            <Avatar
                sx={{
                    width: 42,
                    height: 42,
                    bgcolor: "#1976D2",
                    mr: 1.5
                }}
            >
                J
            </Avatar>

            <Box
                sx={{
                    textAlign: "left"
                }}
            >
                <Typography
                    sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "#0F172A"
                    }}
                >
                    Juan Dela Cruz
                </Typography>

                <Typography
                    sx={{
                        fontSize: 12,
                        color: "#64748B"
                    }}
                >
                    Executive
                </Typography>
            </Box>

            <KeyboardArrowDownRoundedIcon
                sx={{
                    ml: 1,
                    color: "#64748B"
                }}
            />
        </IconButton>
    );
}