/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: PortfolioHealth.tsx
 * Responsibility:
 * Displays the portfolio health summary.
 * ============================================================
 */

import DashboardCard from "./DashboardCard";
import {
    Box,
    Chip,
    Stack,
    Typography
} from "@mui/material";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from "recharts";

export interface PortfolioHealthItem {
    name: string;
    value: number;
    color: string;
}

export interface PortfolioHealthProps {
    title: string;
    score: number;
    status: string;
    totalProjects: number;
    items: PortfolioHealthItem[];
}

export default function PortfolioHealth({
    title,
    score,
    status,
    totalProjects,
    items
}: PortfolioHealthProps) {
    return (
        <DashboardCard title={title}>
            <Box
                sx={{
                    display: "flex",
                    gap: 4,
                    alignItems: "center"
                }}
            >
                <Box
                    sx={{
                        width: 220,
                        height: 220
                    }}
                >
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <PieChart>
                            <Pie
                                data={items}
                                innerRadius={65}
                                outerRadius={95}
                                dataKey="value"
                                strokeWidth={2}
                            >
                                {items.map((item) => (
                                    <Cell
                                        key={item.name}
                                        fill={item.color}
                                    />
                                ))}
                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </Box>

                <Box
                    sx={{
                        flex: 1
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "2.5rem",
                            fontWeight: 700,
                            color: "#0F172A"
                        }}
                    >
                        {score}%
                    </Typography>

                    <Chip
                        label={status}
                        color="success"
                        sx={{
                            mt: 1
                        }}
                    />

                    <Typography
                        sx={{
                            mt: 2,
                            color: "#64748B"
                        }}
                    >
                        Total Projects
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "1.5rem",
                            fontWeight: 600
                        }}
                    >
                        {totalProjects}
                    </Typography>

                    <Stack
                        spacing={1.5}
                        sx={{
                            mt: 3
                        }}
                    >
                        {items.map((item) => (
                            <Box
                                key={item.name}
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: "50%",
                                            bgcolor: item.color
                                        }}
                                    />

                                    <Typography>
                                        {item.name}
                                    </Typography>
                                </Box>

                                <Typography
                                    sx={{
                                        fontWeight: 600
                                    }}
                                >
                                    {item.value}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Box>
        </DashboardCard>
    );
}