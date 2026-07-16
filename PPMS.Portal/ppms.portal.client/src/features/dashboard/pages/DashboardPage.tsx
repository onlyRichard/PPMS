/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: DashboardPage.tsx
 * Responsibility:
 * Enterprise Dashboard
 * ============================================================
 */

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";

import {
    Box,
    Grid
} from "@mui/material";

import DashboardHeader from "../components/DashboardHeader";
import StatisticsCards from "../components/StatisticsCards";

import PortfolioHealth from "../components/PortfolioHealth";
import PortfolioStatusChart from "../components/PortfolioStatusChart";
import ProjectHealthTrendChart from "../components/ProjectHealthTrendChart";
import ResourceUtilizationChart from "../components/ResourceUtilizationChart";

import type { StatisticCardProps } from "../components/StatisticCard";

export default function DashboardPage() {

    const statistics: StatisticCardProps[] = [
        {
            title: "Total Projects",
            value: 148,
            trend: 12,
            trendLabel: "vs last month",
            icon: <DashboardOutlinedIcon color="primary" />,
            iconBackgroundColor: "#DBEAFE"
        },
        {
            title: "Completed",
            value: 97,
            trend: 8,
            trendLabel: "vs last month",
            icon: <AssignmentTurnedInOutlinedIcon color="success" />,
            iconBackgroundColor: "#DCFCE7"
        },
        {
            title: "At Risk",
            value: 14,
            trend: -3,
            trendLabel: "vs last month",
            icon: <WarningAmberOutlinedIcon color="warning" />,
            iconBackgroundColor: "#FEF3C7"
        },
        {
            title: "Delayed",
            value: 8,
            trend: -1,
            trendLabel: "vs last month",
            icon: <ScheduleOutlinedIcon color="error" />,
            iconBackgroundColor: "#FEE2E2"
        }
    ];

    const portfolioHealth = {
        title: "Portfolio Health",
        score: 92,
        status: "Healthy",
        totalProjects: 148,
        items: [
            { name: "On Track", value: 121, color: "#22C55E" },
            { name: "At Risk", value: 18, color: "#F59E0B" },
            { name: "Delayed", value: 9, color: "#EF4444" }
        ]
    };

    const portfolioStatus = [
        { name: "On Track", value: 68, color: "#22C55E" },
        { name: "At Risk", value: 18, color: "#F59E0B" },
        { name: "Delayed", value: 9, color: "#EF4444" },
        { name: "Blocked", value: 5, color: "#64748B" }
    ];

    const projectHealthTrend = [
        { period: "Jan", healthy: 55, atRisk: 8, delayed: 4 },
        { period: "Feb", healthy: 59, atRisk: 7, delayed: 5 },
        { period: "Mar", healthy: 63, atRisk: 6, delayed: 3 },
        { period: "Apr", healthy: 69, atRisk: 5, delayed: 2 },
        { period: "May", healthy: 74, atRisk: 4, delayed: 2 },
        { period: "Jun", healthy: 79, atRisk: 3, delayed: 1 }
    ];

    const resourceUtilization = [
        { department: "Development", allocated: 92, capacity: 100 },
        { department: "QA", allocated: 81, capacity: 100 },
        { department: "Infrastructure", allocated: 76, capacity: 100 },
        { department: "PMO", allocated: 67, capacity: 100 }
    ];

    return (
        <Box>

            <DashboardHeader
                title="Dashboard"
                description="Monitor enterprise portfolio performance and operational health."
                lastUpdated={new Date().toLocaleString()}
                onRefresh={() => console.log("Refresh")}
            />

            <StatisticsCards
                statistics={statistics}
            />

            <Grid
                container
                spacing={3}
                sx={{
                    mt: 1
                }}
            >

                <Grid
                    size={{
                        xs: 12,
                        lg: 6
                    }}
                >
                    <PortfolioHealth
                        {...portfolioHealth}
                    />
                </Grid>

                <Grid
                    size={{
                        xs: 12,
                        lg: 6
                    }}
                >
                    <PortfolioStatusChart
                        title="Portfolio Status"
                        items={portfolioStatus}
                    />
                </Grid>

                <Grid
                    size={12}
                >
                    <ProjectHealthTrendChart
                        title="Project Health Trend"
                        data={projectHealthTrend}
                    />
                </Grid>

                <Grid
                    size={12}
                >
                    <ResourceUtilizationChart
                        title="Resource Utilization"
                        data={resourceUtilization}
                    />
                </Grid>

            </Grid>

        </Box>
    );
}