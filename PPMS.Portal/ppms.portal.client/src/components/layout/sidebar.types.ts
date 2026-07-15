/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: sidebar.types.ts
 * Responsibility:
 * Defines all Sidebar-related TypeScript contracts.
 * ============================================================
 */

import type { SvgIconComponent } from "@mui/icons-material";

export interface SidebarItem {
    id: string;
    title: string;
    route: string;
    icon: SvgIconComponent;
    children?: SidebarItem[];
}

export interface SidebarSection {
    title?: string;
    items: SidebarItem[];

}