import { MenuType, PermissionSignals, PermissionType, RouteType } from "~/features/auth/auth.type.ts";

export const PERMISSION = {
  VIEW: 1,
  CREATE: 2,
  UPDATE: 3,
  DELETE: 4,
} as const;

export const MENU = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  TABLE: "TABLE",
  FORM: "FORM",
  CHARTS: "CHARTS",
  DND: "DND",
  FLOW: "FLOW",
} as const;

export const ROUTE = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  TABLE: "TABLE",
  FORM: "FORM",
  CHARTS: "CHARTS",
  DND: "DND",
  FLOW: "FLOW",
} as const;

export const VALID_PERMISSIONS: Readonly<PermissionSignals> = {
  [PERMISSION.VIEW]: true,
  [PERMISSION.CREATE]: true,
  [PERMISSION.UPDATE]: true,
  [PERMISSION.DELETE]: true,
};

export const MENU_PERMISSION: Readonly<Record<MenuType, PermissionType[]>> = {
  [MENU.HOME]: [],
  [MENU.TABLE]: [PERMISSION.VIEW, PERMISSION.CREATE],
  [MENU.ABOUT]: [PERMISSION.VIEW],
  [MENU.DND]: [PERMISSION.VIEW],
  [MENU.FORM]: [PERMISSION.VIEW],
  [MENU.CHARTS]: [PERMISSION.VIEW],
  [MENU.FLOW]: [PERMISSION.VIEW],
};

export const ROUTE_PERMISSION: Readonly<Record<RouteType, PermissionType[]>> = {
  [ROUTE.HOME]: [],
  [ROUTE.TABLE]: [PERMISSION.VIEW],
  [ROUTE.ABOUT]: [PERMISSION.DELETE],
  [ROUTE.DND]: [PERMISSION.VIEW],
  [ROUTE.FORM]: [PERMISSION.VIEW],
  [ROUTE.CHARTS]: [PERMISSION.VIEW],
  [ROUTE.FLOW]: [PERMISSION.VIEW],
};
