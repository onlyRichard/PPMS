/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: PortfolioStatusChart.tsx
 * Responsibility:
 * Displays project distribution by portfolio status.
 * ============================================================
 */

import {
    Box,
    Stack,
    Typography
} from "@mui/material";
import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip
} from "recharts";
import DashboardCard from "./DashboardCard";

export interface PortfolioStatusItem {
    name: string;
    value: number;
    color: string;
}

export interface PortfolioStatusChartProps {
    title: string;
    items: PortfolioStatusItem[];
}

export default function PortfolioStatusChart({
    title,
    items
}: PortfolioStatusChartProps) {
    return (
        <DashboardCard title={title}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4
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
                                dataKey="value"
                                innerRadius={60}
                                outerRadius={90}
                                paddingAngle={3}
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

                <Stack
                    spacing={2}
                    sx={{
                        flex: 1
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

                                <Typography
                                    sx={{
                                        fontSize: "0.9rem"
                                    }}
                                >
                                    {item.name}
                                </Typography>
                            </Box>

                            <Typography
                                sx={{
                                    fontWeight: 600
                                }}
                            >
                                {item.value}%
                            </Typography>
                        </Box>
                    ))}
                </Stack>
            </Box>
        </DashboardCard>
    );
}