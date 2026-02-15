import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/landing.tsx"),
    route("/login", "./routes/auth/login.tsx"),
    route("/signup", "./routes/auth/register.tsx"),
    route("/dashboard", "./routes/dashboard/index.tsx"),
    route("/settings", "./routes/dashboard/settings.tsx"),
    route("/testing", "./routes/testing.tsx"),
] satisfies RouteConfig;
