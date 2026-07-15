/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: SidebarItem.tsx
 * Responsibility:
 * Displays a single sidebar navigation item.
 * ============================================================
 */

import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import { NavLink } from "react-router-dom";
import type { SidebarItem as SidebarItemType } from "./sidebar.types";

interface SidebarItemProps {
    item: SidebarItemType;
}

export default function SidebarItem({ item }: SidebarItemProps) {
    const Icon = item.icon;

    return (
        <ListItemButton
            component={NavLink}
            to={item.route}
            sx={{
                mx: 1.5,
                my: 0.5,
                px: 2,
                py: 1.25,
                borderRadius: 2,
                color: "#CBD5E1",
                transition: "all .2s ease",
                "& .MuiListItemIcon-root": {
                    color: "inherit"
                },
                "&.active": {
                    bgcolor: "#0F2D5C",
                    color: "#FFFFFF",
                    "& .MuiListItemIcon-root": {
                        color: "#FFFFFF"
                    }
                },
                "&:hover": {
                    bgcolor: "#123566",
                    color: "#FFFFFF"
                }
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 42
                }}
            >
                <Icon fontSize="small" />
            </ListItemIcon>

            <ListItemText
                disableTypography
                primary={
                    <Typography
                        sx={{
                            fontSize: "0.875rem",
                            fontWeight: 500
                        }}
                    >
                        {item.title}
                    </Typography>
                }
            />
        </ListItemButton>
    );
}