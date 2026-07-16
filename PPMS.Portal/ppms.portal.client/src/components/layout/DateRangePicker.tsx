/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: DateRangePicker.tsx
 * Responsibility:
 * Displays the dashboard date range selector.
 * ============================================================
 */

import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Button } from "@mui/material";

export default function DateRangePicker() {
    return (
        <Button
            startIcon={<CalendarMonthRoundedIcon />}
            endIcon={<KeyboardArrowDownRoundedIcon />}
            variant="outlined"
            sx={{
                height: 42,
                px: 2,
                borderRadius: 2,
                borderColor: "#E2E8F0",
                color: "#334155",
                textTransform: "none",
                fontWeight: 600,
                bgcolor: "#FFFFFF",
                "&:hover": {
                    bgcolor: "#F8FAFC",
                    borderColor: "#CBD5E1"
                }
            }}
        >
            Jun 1 - Jun 30, 2026
        </Button>
    );
}