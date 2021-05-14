import type React from 'react'

import { Home } from '../pages/home'

export type RouteDeclaration = {
  path: string
  Component: Parameters<typeof React.createElement>[0]
}

export const routes: RouteDeclaration[] = [
  {
    path: '/',
    Component: Home,
  },
]
