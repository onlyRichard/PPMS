/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: ProjectHealthTrendChart.tsx
 * Responsibility:
 * Displays project health trends over time.
 * ============================================================
 */

import DashboardCard from "./DashboardCard";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export interface ProjectHealthTrendItem {
    period: string;
    healthy: number;
    atRisk: number;
    delayed: number;
}

export interface ProjectHealthTrendChartProps {
    title: string;
    data: ProjectHealthTrendItem[];
}

export default function ProjectHealthTrendChart({
    title,
    data
}: ProjectHealthTrendChartProps) {
    return (
        <DashboardCard title={title}>
            <ResponsiveContainer
                width="100%"
                height={320}
            >
                <LineChart data={data}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                    />

                    <XAxis dataKey="period" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Line
                        type="monotone"
                        dataKey="healthy"
                        stroke="#16A34A"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />

                    <Line
                        type="monotone"
                        dataKey="atRisk"
                        stroke="#F59E0B"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />

                    <Line
                        type="monotone"
                        dataKey="delayed"
                        stroke="#EF4444"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </DashboardCard>
    );
}