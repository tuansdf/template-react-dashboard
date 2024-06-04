/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TableLazyImport = createFileRoute('/table')()
const FormLazyImport = createFileRoute('/form')()
const FlowLazyImport = createFileRoute('/flow')()
const DndLazyImport = createFileRoute('/dnd')()
const ChartsLazyImport = createFileRoute('/charts')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TableLazyRoute = TableLazyImport.update({
  path: '/table',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/table.lazy').then((d) => d.Route))

const FormLazyRoute = FormLazyImport.update({
  path: '/form',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/form.lazy').then((d) => d.Route))

const FlowLazyRoute = FlowLazyImport.update({
  path: '/flow',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/flow.lazy').then((d) => d.Route))

const DndLazyRoute = DndLazyImport.update({
  path: '/dnd',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/dnd.lazy').then((d) => d.Route))

const ChartsLazyRoute = ChartsLazyImport.update({
  path: '/charts',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/charts.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/charts': {
      id: '/charts'
      path: '/charts'
      fullPath: '/charts'
      preLoaderRoute: typeof ChartsLazyImport
      parentRoute: typeof rootRoute
    }
    '/dnd': {
      id: '/dnd'
      path: '/dnd'
      fullPath: '/dnd'
      preLoaderRoute: typeof DndLazyImport
      parentRoute: typeof rootRoute
    }
    '/flow': {
      id: '/flow'
      path: '/flow'
      fullPath: '/flow'
      preLoaderRoute: typeof FlowLazyImport
      parentRoute: typeof rootRoute
    }
    '/form': {
      id: '/form'
      path: '/form'
      fullPath: '/form'
      preLoaderRoute: typeof FormLazyImport
      parentRoute: typeof rootRoute
    }
    '/table': {
      id: '/table'
      path: '/table'
      fullPath: '/table'
      preLoaderRoute: typeof TableLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  ChartsLazyRoute,
  DndLazyRoute,
  FlowLazyRoute,
  FormLazyRoute,
  TableLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/charts",
        "/dnd",
        "/flow",
        "/form",
        "/table"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/charts": {
      "filePath": "charts.lazy.tsx"
    },
    "/dnd": {
      "filePath": "dnd.lazy.tsx"
    },
    "/flow": {
      "filePath": "flow.lazy.tsx"
    },
    "/form": {
      "filePath": "form.lazy.tsx"
    },
    "/table": {
      "filePath": "table.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
