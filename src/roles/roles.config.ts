import { Routes } from '../routes';
import { userRoutes, visitorRoutes } from '../routes/routes.config';
import { Roles } from './roles.types';

export const getRoutesByRole: Record<Roles, Routes[]> = {
  [Roles.VISITOR]: visitorRoutes,
  [Roles.USER]: userRoutes,
  [Roles.ADMIN]: Object.values(Routes),
  [Roles.WRITE]: Object.values(Routes),
};