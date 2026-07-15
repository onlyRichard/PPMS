import { Box, Typography } from "@mui/material";

export default function Logo() {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 3,
                py: 3,
                borderBottom: "1px solid rgba(255,255,255,.08)"
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: "#FF6A00",
                    fontWeight: 800
                }}
            >
                PPMS
            </Typography>

            <Box>
                <Typography
                    variant="subtitle2"
                    sx={{
                        color: "#FFFFFF",
                        fontWeight: 700
                    }}
                >
                    Enterprise
                </Typography>

                <Typography
                    variant="caption"
                    sx={{
                        color: "#94A3B8"
                    }}
                >
                    Project Portfolio
                </Typography>
            </Box>
        </Box>
    );
}