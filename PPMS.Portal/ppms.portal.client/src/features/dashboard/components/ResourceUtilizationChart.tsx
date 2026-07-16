/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: ResourceUtilizationChart.tsx
 * Responsibility:
 * Displays organizational resource utilization.
 * ============================================================
 */

import DashboardCard from "./DashboardCard";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

export interface ResourceUtilizationItem {
    department: string;
    allocated: number;
    capacity: number;
}

export interface ResourceUtilizationChartProps {
    title: string;
    data: ResourceUtilizationItem[];
}

export default function ResourceUtilizationChart({
    title,
    data
}: ResourceUtilizationChartProps) {
    return (
        <DashboardCard title={title}>
            <ResponsiveContainer
                width="100%"
                height={320}
            >
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="department" />

                    <YAxis />

                    <Tooltip />

                    <Legend />

                    <Bar
                        dataKey="allocated"
                        name="Allocated"
                        fill="#1565C0"
                        radius={[6, 6, 0, 0]}
                    />

                    <Bar
                        dataKey="capacity"
                        name="Capacity"
                        fill="#90CAF9"
                        radius={[6, 6, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </DashboardCard>
    );
}