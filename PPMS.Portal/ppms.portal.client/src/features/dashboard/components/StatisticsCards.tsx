/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: StatisticsCards.tsx
 * Responsibility:
 * Renders the collection of dashboard KPI cards.
 * ============================================================
 */

import Grid from "@mui/material/Grid";
import type { StatisticCardProps } from "./StatisticCard";
import StatisticCard from "./StatisticCard";

export interface StatisticsCardsProps {
    statistics: StatisticCardProps[];
}

export default function StatisticsCards({
    statistics
}: StatisticsCardsProps) {
    return (
        <Grid
            container
            spacing={3}
        >
            {statistics.map((statistic, index) => (
                <Grid
                    key={index}
                    size={{
                        xs: 12,
                        sm: 6,
                        lg: 3
                    }}
                >
                    <StatisticCard
                        {...statistic}
                    />
                </Grid>
            ))}
        </Grid>
    );
}