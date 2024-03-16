import { Routes } from "./routes.types";

export const publicRoutes = [Routes.ROOT];

export const visitorRoutes = [...publicRoutes, Routes.LOGIN];

export const userRoutes = [...publicRoutes, Routes.DASHBOARD];
