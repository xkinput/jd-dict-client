import { createBrowserHistory } from 'history'
import { useRoutes } from 'react-router-dom'
import { RouteObjectExt, setLayouts } from '~/plugins/reactRouterLayout'
import { Index } from '~/pages'
import * as Layouts from '~/layouts'
import { AboutIndex } from '~/pages/about'
import { UserIndex } from '~/pages/user'

const routes: RouteObjectExt<keyof typeof Layouts>[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'user',
    element: <UserIndex />,
  },
  {
    path: 'about',
    element: <AboutIndex />,
  },
]

export const routerHistory = createBrowserHistory()

export function Routes() {
  setLayouts(routes)

  return useRoutes(routes)
}
