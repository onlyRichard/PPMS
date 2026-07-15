/**
 * ============================================================
 * PPMS Enterprise Project Portfolio Management System
 * ------------------------------------------------------------
 * File: app.config.ts
 * Responsibility:
 * Global application configuration.
 * ============================================================
 */

export const AppConfig = {
    applicationName: "PPMS",
    applicationTitle: "Enterprise Project & Portfolio Management System",
    version: "1.0.0",
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "https://localhost:7000/api",
    defaultTheme: "light"
} as const;