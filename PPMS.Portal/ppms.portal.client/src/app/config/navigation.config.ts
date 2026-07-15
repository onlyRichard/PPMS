/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: navigation.config.ts
 * Responsibility:
 * Stores metadata for every application page.
 * ============================================================
 */

import { RoutePaths } from "../../routes/routePaths";

export interface NavigationItem {

    title: string;

    route: string;

}

export const NavigationConfig: NavigationItem[] = [

    {
        title: "Dashboard",
        route: RoutePaths.Dashboard
    },

    {
        title: "Portfolio",
        route: RoutePaths.Portfolio
    },

    {
        title: "Projects",
        route: RoutePaths.Projects
    },

    {
        title: "Tasks",
        route: RoutePaths.Tasks
    },

    {
        title: "Resources",
        route: RoutePaths.Resources
    },

    {
        title: "Risks",
        route: RoutePaths.Risks
    },

    {
        title: "Issues",
        route: RoutePaths.Issues
    },

    {
        title: "Dependencies",
        route: RoutePaths.Dependencies
    },

    {
        title: "Benefits",
        route: RoutePaths.Benefits
    },

    {
        title: "Forecast",
        route: RoutePaths.Forecast
    },

    {
        title: "AI Insights",
        route: RoutePaths.AI
    },

    {
        title: "Reports",
        route: RoutePaths.Reports
    },

    {
        title: "Administration",
        route: RoutePaths.Administration
    },

    {
        title: "Notifications",
        route: RoutePaths.Notifications
    },

    {
        title: "Settings",
        route: RoutePaths.Settings
    }

];