/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: PortfolioSelector.tsx
 * Responsibility:
 * Displays the portfolio selector.
 * ============================================================
 */

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Button } from "@mui/material";

export default function PortfolioSelector() {
    return (
        <Button
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
            All Portfolios
        </Button>
    );
}