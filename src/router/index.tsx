import { createBrowserHistory } from 'history'
import { useRoutes } from 'react-router-dom'
import { RouteObjectExt, setLayouts } from '~/plugins/reactRouterLayout'
import UseTransition from '~/pages/learn/useTransition'
import { Index } from '~/pages'
import { DictAdd } from '~/pages/dict/add'
import { DictEdit } from '~/pages/dict/edit'
import * as Layouts from '~/layouts'
import { AboutIndex } from '~/pages/about'

const routes: RouteObjectExt<keyof typeof Layouts>[] = [
  {
    path: '/',
    element: <Index />,
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
