/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: UserProfileMenu.tsx
 * Responsibility:
 * Displays the authenticated user's profile.
 * ============================================================
 */

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import {
    Avatar,
    Box,
    IconButton,
    Typography
} from "@mui/material";

export interface UserProfile {
    id: number;
    fullName: string;
    role: string;
    avatarUrl?: string;
}

interface UserProfileMenuProps {
    user: UserProfile;
    onClick?: () => void;
}

export default function UserProfileMenu({
    user,
    onClick
}: UserProfileMenuProps) {
    return (
        <IconButton
            disableRipple
            onClick={onClick}
            sx={{
                borderRadius: 3,
                px: 1.5,
                py: 0.75,
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                "&:hover": {
                    bgcolor: "#F8FAFC"
                }
            }}
        >
            <Avatar
                src={user.avatarUrl}
                sx={{
                    width: 42,
                    height: 42,
                    bgcolor: "#1565C0",
                    fontWeight: 600
                }}
            >
                {!user.avatarUrl && user.fullName.charAt(0)}
            </Avatar>

            <Box
                sx={{
                    textAlign: "left"
                }}
            >
                <Typography
                    sx={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#0F172A"
                    }}
                >
                    {user.fullName}
                </Typography>

                <Typography
                    sx={{
                        fontSize: "0.75rem",
                        color: "#64748B"
                    }}
                >
                    {user.role}
                </Typography>
            </Box>

            <KeyboardArrowDownRoundedIcon
                sx={{
                    color: "#64748B",
                    fontSize: 20
                }}
            />
        </IconButton>
    );
}