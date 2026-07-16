/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: Topbar.tsx
 * Responsibility:
 * Enterprise application top navigation.
 * ============================================================
 */

import type { UserProfile } from "./UserProfileMenu";
import { AppBar, Box, Toolbar } from "@mui/material";
import MenuButton from "./MenuButton";
import SearchBox from "./SearchBox";
import PortfolioSelector from "./PortfolioSelector";
import DateRangePicker from "./DateRangePicker";
import NotificationMenu from "./NotificationMenu";
import UserProfileMenu from "./UserProfileMenu";

interface TopbarProps {
    user: UserProfile;
}

export default function Topbar({ user }: TopbarProps) {
    return (
        <AppBar
            position="static"
            elevation={0}
            color="inherit"
            sx={{
                height: 72,
                bgcolor: "#FFFFFF",
                borderBottom: "1px solid #E5E7EB",
                justifyContent: "center",
                zIndex: 1100
            }}
        >
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    px: 3
                }}
            >
                <MenuButton />

                <SearchBox />

                <PortfolioSelector />

                <DateRangePicker />

                <Box sx={{ flexGrow: 1 }} />

                <NotificationMenu />

                <UserProfileMenu user={user} />
            </Toolbar>
        </AppBar>
    );
}