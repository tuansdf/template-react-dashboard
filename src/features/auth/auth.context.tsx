import { LinkProps, useNavigate } from "@tanstack/react-router";
import { createContext, PropsWithChildren, useCallback, useContext, useMemo } from "react";
import { AuthType, CommonSignals, MenuType, PermissionType, RouteType } from "~/features/auth/auth.type.ts";
import {
  authorizeAnd as uAuthorizeAnd,
  authorizeOr as uAuthorizeOr,
  getAllowedMenus,
  getAllowedRoutes,
  getPermissionSignals,
} from "~/features/auth/auth.util.ts";
import { useLocalStorage } from "~/hooks/use-local-storage.tsx";

export type AuthContextValues = {
  authObj: AuthType | null;
  setAuthObj: (o: AuthType) => void;
  isAuth: boolean;
  allowedMenus: CommonSignals;
  allowedRoutes: CommonSignals;
  authorizeAnd: (p: PermissionType[]) => boolean;
  authorizeOr: (p: PermissionType[]) => boolean;
  authorizeMenu: (a: MenuType) => boolean;
  authorizeRoute: (a: RouteType) => boolean;
};

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authObj, setAuthObj] = useLocalStorage<AuthType | null>({ key: "trd-auth", defaultValue: null });

  const isAuth = useMemo(() => {
    return !!authObj?.token;
  }, [authObj]);
  const permissionSignals: CommonSignals = useMemo(() => {
    if (!authObj) return {};
    return getPermissionSignals(authObj?.permissions);
  }, [authObj]);
  const allowedMenus: CommonSignals = useMemo(() => {
    return getAllowedMenus(permissionSignals);
  }, [permissionSignals]);
  const allowedRoutes: CommonSignals = useMemo(() => {
    return getAllowedRoutes(permissionSignals);
  }, [permissionSignals]);
  const authorizeAnd = useCallback(
    (perms: PermissionType[]) => {
      return uAuthorizeAnd(permissionSignals, perms);
    },
    [permissionSignals],
  );
  const authorizeOr = useCallback(
    (perms: PermissionType[]) => {
      return uAuthorizeOr(permissionSignals, perms);
    },
    [permissionSignals],
  );
  const authorizeMenu = useCallback(
    (s: MenuType) => {
      return allowedMenus[s];
    },
    [allowedMenus],
  );
  const authorizeRoute = useCallback(
    (s: RouteType) => {
      return allowedRoutes[s];
    },
    [allowedRoutes],
  );

  return (
    <AuthContext.Provider
      value={{
        authObj,
        setAuthObj,
        isAuth,
        allowedMenus,
        allowedRoutes,
        authorizeAnd,
        authorizeOr,
        authorizeMenu,
        authorizeRoute,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};

export const useAuthorizeRoute = (route: RouteType, to: LinkProps["to"]) => {
  const navigate = useNavigate();
  const { authorizeRoute } = useAuthContext();
  const isAuth = useMemo(() => {
    return authorizeRoute(route);
  }, [authorizeRoute, route]);
  if (!isAuth) navigate({ to });
};
