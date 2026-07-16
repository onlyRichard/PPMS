/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: SearchBox.tsx
 * Responsibility:
 * Displays the global application search.
 * ============================================================
 */

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

export default function SearchBox() {
    return (
        <TextField
            fullWidth
            size="small"
            placeholder="Search projects, tasks, resources..."
            slotProps={{
                input: {
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchRoundedIcon color="action" />
                        </InputAdornment>
                    )
                }
            }}
            sx={{
                width: 420,
                "& .MuiOutlinedInput-root": {
                    borderRadius: 3,
                    bgcolor: "#FFFFFF"
                }
            }}
        />
    );
}