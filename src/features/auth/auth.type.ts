import { MENU, PERMISSION, ROUTE } from "~/features/auth/auth.constant.ts";

export type PermissionType = (typeof PERMISSION)[keyof typeof PERMISSION];
export type MenuType = (typeof MENU)[keyof typeof MENU];
export type RouteType = (typeof ROUTE)[keyof typeof ROUTE];
export type AuthType = {
  userId: string;
  username: string;
  permissions: PermissionType[];
  token: string;
};

export type PermissionSignals = Record<PermissionType, boolean>;
export type MenuSignals = Record<MenuType, boolean>;
export type RouteSignals = Record<RouteType, boolean>;

export type CommonSignals = Record<string | number, boolean>;
