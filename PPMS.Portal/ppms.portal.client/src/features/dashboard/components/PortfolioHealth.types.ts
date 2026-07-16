/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: PortfolioHealth.types.ts
 * Responsibility:
 * Portfolio Health data contracts.
 * ============================================================
 */

export interface PortfolioHealthItem {
    name: string;
    value: number;
    color: string;
}

export interface PortfolioHealthData {
    score: number;
    status: string;
    totalProjects: number;
    items: PortfolioHealthItem[];
}