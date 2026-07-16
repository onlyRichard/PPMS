/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: DashboardHeader.tsx
 * Responsibility:
 * Displays the dashboard page header.
 * ============================================================
 */

import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import {
    Box,
    Button,
    Stack,
    Typography
} from "@mui/material";

export interface DashboardHeaderProps {
    title: string;
    description: string;
    lastUpdated?: string;
    onRefresh?: () => void;
}

export default function DashboardHeader({
    title,
    description,
    lastUpdated,
    onRefresh
}: DashboardHeaderProps) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 4
            }}
        >
            <Box>
                <Typography
                    sx={{
                        fontSize: "2rem",
                        fontWeight: 700,
                        color: "#0F172A"
                    }}
                >
                    {title}
                </Typography>

                <Typography
                    sx={{
                        mt: 0.75,
                        color: "#64748B",
                        fontSize: "0.95rem"
                    }}
                >
                    {description}
                </Typography>

                {lastUpdated && (
                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: "0.75rem",
                            color: "#94A3B8"
                        }}
                    >
                        Last Updated: {lastUpdated}
                    </Typography>
                )}
            </Box>

            <Stack
                direction="row"
                spacing={2}
            >
                <Button
                    variant="outlined"
                    startIcon={<RefreshRoundedIcon />}
                    onClick={onRefresh}
                    sx={{
                        textTransform: "none",
                        borderRadius: 2
                    }}
                >
                    Refresh
                </Button>
            </Stack>
        </Box>
    );
}