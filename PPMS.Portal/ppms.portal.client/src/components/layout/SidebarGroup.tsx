/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: SidebarGroup.tsx
 * Responsibility:
 * Displays a group of sidebar navigation items.
 * ============================================================
 */

import { List } from "@mui/material";
import SidebarItem from "./SidebarItem";
import type { SidebarSection } from "./sidebar.types";

interface SidebarGroupProps {
    section: SidebarSection;
}

export default function SidebarGroup({ section }: SidebarGroupProps) {
    return (
        <List
            disablePadding
            sx={{
                py: 1
            }}
        >
            {section.items.map((item) => (
                <SidebarItem
                    key={item.id}
                    item={item}
                />
            ))}
        </List>
    );
}