import { MENU_PERMISSION, ROUTE_PERMISSION, VALID_PERMISSIONS } from "~/features/auth/auth.constant.ts";
import { CommonSignals, MenuType, PermissionType, RouteType } from "~/features/auth/auth.type.ts";

export const getPermissionSignals = (perms: PermissionType[]): CommonSignals => {
  const permissionMap: CommonSignals = {};
  perms.forEach((perm) => {
    if (perm in VALID_PERMISSIONS) {
      permissionMap[perm] = true;
    }
  });
  return permissionMap;
};

export const getAllowedMenus = (perms: CommonSignals): CommonSignals => {
  const result: CommonSignals = {};
  Object.keys(MENU_PERMISSION).forEach((item) => {
    const neededPermissions = MENU_PERMISSION[item as MenuType];
    if (neededPermissions.length === 0) return (result[item] = true);
    const hasPermission = neededPermissions.some((p) => perms[p]);
    if (hasPermission) result[item] = true;
  });
  return result;
};

export const getAllowedRoutes = (perms: CommonSignals): CommonSignals => {
  const result: CommonSignals = {};
  Object.keys(ROUTE_PERMISSION).forEach((item) => {
    const neededPermissions = ROUTE_PERMISSION[item as RouteType];
    if (neededPermissions.length === 0) return (result[item] = true);
    const hasPermission = neededPermissions.some((p) => perms[p]);
    if (hasPermission) result[item] = true;
  });
  return result;
};

export const authorizeAnd = (userPerms: CommonSignals, neededPerms: PermissionType[]) => {
  return neededPerms.every((item) => userPerms[item]);
};

export const authorizeOr = (userPerms: CommonSignals, neededPerms: PermissionType[]) => {
  return neededPerms.some((item) => userPerms[item]);
};
