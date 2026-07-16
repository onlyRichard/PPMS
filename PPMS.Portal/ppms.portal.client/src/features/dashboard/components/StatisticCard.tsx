/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: StatisticCard.tsx
 * Responsibility:
 * Displays a reusable KPI statistic card.
 * ============================================================
 */

import type { ReactNode } from "react";
import {
    Box,
    Chip,
    Typography
} from "@mui/material";
import DashboardCard from "./DashboardCard";

export interface StatisticCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    trend?: number;
    trendLabel?: string;
    iconBackgroundColor?: string;
}

export default function StatisticCard({
    title,
    value,
    icon,
    trend,
    trendLabel,
    iconBackgroundColor = "#EFF6FF"
}: StatisticCardProps) {
    const isPositive = (trend ?? 0) >= 0;

    return (
        <DashboardCard>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: "0.875rem",
                            color: "#64748B"
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        sx={{
                            mt: 1,
                            fontSize: "2rem",
                            fontWeight: 700,
                            color: "#0F172A"
                        }}
                    >
                        {value}
                    </Typography>

                    {trend !== undefined && (
                        <Chip
                            size="small"
                            label={`${isPositive ? "+" : ""}${trend}% ${trendLabel ?? ""}`}
                            color={isPositive ? "success" : "error"}
                            sx={{
                                mt: 2,
                                fontWeight: 600
                            }}
                        />
                    )}
                </Box>

                <Box
                    sx={{
                        width: 56,
                        height: 56,
                        borderRadius: 3,
                        bgcolor: iconBackgroundColor,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    {icon}
                </Box>
            </Box>
        </DashboardCard>
    );
}