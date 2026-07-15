/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: theme.ts
 * Responsibility:
 * Global Material UI Theme
 * ============================================================
 */

import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {

        mode: "light",

        primary: {
            main: "#1565C0"
        },

        secondary: {
            main: "#FF9800"
        },

        background: {

            default: "#F4F7FC",

            paper: "#FFFFFF"

        }

    },

    shape: {

        borderRadius: 10

    },

    typography: {

        fontFamily: [
            "Inter",
            "Segoe UI",
            "Roboto",
            "Arial",
            "sans-serif"
        ].join(","),

        h4: {

            fontWeight: 700

        },

        h5: {

            fontWeight: 600

        },

        button: {

            textTransform: "none"

        }

    }

});

export default theme;