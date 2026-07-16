/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: MenuButton.tsx
 * Responsibility:
 * Displays the sidebar toggle button.
 * ============================================================
 */

import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function MenuButton() {
    return (
        <IconButton
            size="large"
            sx={{
                color: "#334155",
                borderRadius: 2,
                "&:hover": {
                    bgcolor: "#F1F5F9"
                }
            }}
        >
            <MenuRoundedIcon />
        </IconButton>
    );
}