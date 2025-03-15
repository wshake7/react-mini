/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as LayoutHomeImport } from './routes/_layout/home'
import { Route as LayoutDemoImport } from './routes/_layout/demo'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const LayoutHomeRoute = LayoutHomeImport.update({
  id: '/_layout/home',
  path: '/home',
  getParentRoute: () => rootRoute,
} as any)

const LayoutDemoRoute = LayoutDemoImport.update({
  id: '/_layout/demo',
  path: '/demo',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_layout/demo': {
      id: '/_layout/demo'
      path: '/demo'
      fullPath: '/demo'
      preLoaderRoute: typeof LayoutDemoImport
      parentRoute: typeof rootRoute
    }
    '/_layout/home': {
      id: '/_layout/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof LayoutHomeImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/demo': typeof LayoutDemoRoute
  '/home': typeof LayoutHomeRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/demo': typeof LayoutDemoRoute
  '/home': typeof LayoutHomeRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_layout/demo': typeof LayoutDemoRoute
  '/_layout/home': typeof LayoutHomeRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/demo' | '/home'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/demo' | '/home'
  id: '__root__' | '/' | '/_layout/demo' | '/_layout/home'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  LayoutDemoRoute: typeof LayoutDemoRoute
  LayoutHomeRoute: typeof LayoutHomeRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  LayoutDemoRoute: LayoutDemoRoute,
  LayoutHomeRoute: LayoutHomeRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_layout/demo",
        "/_layout/home"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_layout/demo": {
      "filePath": "_layout/demo.tsx"
    },
    "/_layout/home": {
      "filePath": "_layout/home.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
