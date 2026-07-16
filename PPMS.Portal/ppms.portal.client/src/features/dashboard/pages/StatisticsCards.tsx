/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: StatisticsCards.tsx
 * Responsibility:
 * Displays the dashboard KPI cards.
 * ============================================================
 */

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import Grid from "@mui/material/Grid";
import StatisticCard from "./StatisticCard";

interface DashboardStatistic {
    id: number;
    title: string;
    value: number;
    trend: number;
    trendLabel: string;
    icon: React.ReactNode;
    iconBackgroundColor: string;
}

const statistics: DashboardStatistic[] = [
    {
        id: 1,
        title: "Total Projects",
        value: 148,
        trend: 12,
        trendLabel: "vs last month",
        icon: <DashboardOutlinedIcon color="primary" />,
        iconBackgroundColor: "#DBEAFE"
    },
    {
        id: 2,
        title: "Completed",
        value: 97,
        trend: 8,
        trendLabel: "vs last month",
        icon: <AssignmentTurnedInOutlinedIcon color="success" />,
        iconBackgroundColor: "#DCFCE7"
    },
    {
        id: 3,
        title: "At Risk",
        value: 14,
        trend: -3,
        trendLabel: "vs last month",
        icon: <WarningAmberOutlinedIcon color="warning" />,
        iconBackgroundColor: "#FEF3C7"
    },
    {
        id: 4,
        title: "Delayed",
        value: 8,
        trend: -1,
        trendLabel: "vs last month",
        icon: <ScheduleOutlinedIcon color="error" />,
        iconBackgroundColor: "#FEE2E2"
    }
];

export default function StatisticsCards() {
    return (
        <Grid container spacing={3}>
            {statistics.map((statistic) => (
                <Grid
                    key={statistic.id}
                    size={{ xs: 12, sm: 6, lg: 3 }}
                >
                    <StatisticCard
                        title={statistic.title}
                        value={statistic.value}
                        trend={statistic.trend}
                        trendLabel={statistic.trendLabel}
                        icon={statistic.icon}
                        iconBackgroundColor={statistic.iconBackgroundColor}
                    />
                </Grid>
            ))}
        </Grid>
    );
}