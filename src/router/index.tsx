import { createBrowserHistory } from 'history'
import { useRoutes } from 'react-router-dom'
import { RouteObjectExt, setLayouts } from '~/plugins/reactRouterLayout'
import UseTransition from '~/pages/learn/useTransition'
import { Index } from '~/pages'
import { DictAdd } from '~/pages/dict/add'
import { DictEdit } from '~/pages/dict/edit'
import * as Layouts from '~/layouts'

const routes: RouteObjectExt<keyof typeof Layouts>[] = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: 'learn',
    element: <UseTransition />,
  },
  {
    path: 'dict/add',
    element: <DictAdd />,
    layout: 'Default2Layout',
  },
  {
    path: 'dict/edit',
    element: <DictEdit />,
    layout: 'LoginLayout',
  },
]

export const routerHistory = createBrowserHistory()

export function Routes() {
  setLayouts(routes)

  return useRoutes(routes)
}
