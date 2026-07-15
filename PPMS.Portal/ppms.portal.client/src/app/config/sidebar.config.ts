/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: sidebar.config.ts
 * Responsibility:
 * Sidebar navigation configuration.
 * ============================================================
 */

import type { SvgIconComponent } from "@mui/icons-material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

import { RoutePaths } from "../../routes/routePaths";

export interface SidebarItemConfig {
    id: string;
    title: string;
    route: string;
    icon: SvgIconComponent;
}

export const SidebarConfig: SidebarItemConfig[] = [

    {
        id: "dashboard",
        title: "Dashboard",
        route: RoutePaths.Dashboard,
        icon: DashboardOutlinedIcon
    },

    {
        id: "portfolio",
        title: "Portfolio",
        route: RoutePaths.Portfolio,
        icon: FolderCopyOutlinedIcon
    },

    {
        id: "projects",
        title: "Projects",
        route: RoutePaths.Projects,
        icon: AssignmentOutlinedIcon
    },

    {
        id: "tasks",
        title: "Tasks",
        route: RoutePaths.Tasks,
        icon: TaskOutlinedIcon
    },

    {
        id: "resources",
        title: "Resources",
        route: RoutePaths.Resources,
        icon: GroupsOutlinedIcon
    },

    {
        id: "risks",
        title: "Risks",
        route: RoutePaths.Risks,
        icon: WarningAmberOutlinedIcon
    },

    {
        id: "issues",
        title: "Issues",
        route: RoutePaths.Issues,
        icon: BugReportOutlinedIcon
    },

    {
        id: "dependencies",
        title: "Dependencies",
        route: RoutePaths.Dependencies,
        icon: LinkOutlinedIcon
    },

    {
        id: "benefits",
        title: "Benefits",
        route: RoutePaths.Benefits,
        icon: SavingsOutlinedIcon
    },

    {
        id: "forecast",
        title: "Forecast",
        route: RoutePaths.Forecast,
        icon: TimelineOutlinedIcon
    },

    {
        id: "ai",
        title: "AI Insights",
        route: RoutePaths.AI,
        icon: AutoAwesomeOutlinedIcon
    },

    {
        id: "reports",
        title: "Reports",
        route: RoutePaths.Reports,
        icon: AssessmentOutlinedIcon
    },

    {
        id: "administration",
        title: "Administration",
        route: RoutePaths.Administration,
        icon: AdminPanelSettingsOutlinedIcon
    },

    {
        id: "notifications",
        title: "Notifications",
        route: RoutePaths.Notifications,
        icon: NotificationsOutlinedIcon
    },

    {
        id: "settings",
        title: "Settings",
        route: RoutePaths.Settings,
        icon: SettingsOutlinedIcon
    }

];