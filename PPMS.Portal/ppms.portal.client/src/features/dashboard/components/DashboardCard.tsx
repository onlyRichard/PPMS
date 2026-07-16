/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: DashboardCard.tsx
 * Responsibility:
 * Reusable dashboard card container.
 * ============================================================
 */

import type { ReactNode } from "react";
import {
    Box,
    Typography
} from "@mui/material";

export interface DashboardCardProps {
    title?: string;
    subtitle?: string;
    action?: ReactNode;
    children: ReactNode;
    height?: number | string;
}

export default function DashboardCard({
    title,
    subtitle,
    action,
    children,
    height = "100%"
}: DashboardCardProps) {
    return (
        <Box
            sx={{
                height,
                bgcolor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: 3,
                boxShadow: "0 2px 8px rgba(15,23,42,.04)",
                display: "flex",
                flexDirection: "column"
            }}
        >
            {(title || action) && (
                <Box
                    sx={{
                        px: 3,
                        py: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid #F1F5F9"
                    }}
                >
                    <Box>
                        {title && (
                            <Typography
                                sx={{
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    color: "#0F172A"
                                }}
                            >
                                {title}
                            </Typography>
                        )}

                        {subtitle && (
                            <Typography
                                sx={{
                                    mt: .25,
                                    fontSize: ".75rem",
                                    color: "#64748B"
                                }}
                            >
                                {subtitle}
                            </Typography>
                        )}
                    </Box>

                    {action}
                </Box>
            )}

            <Box
                sx={{
                    flex: 1,
                    p: 3
                }}
            >
                {children}
            </Box>
        </Box>
    );
}