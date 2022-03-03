import * as React from 'react'
import { RouteObject, useRoutes } from 'react-router-dom'
import loadable from '@loadable/component'

interface RouteObjectProps {
  path: string
  componentName: string
  children?: RouteObjectProps[]
  supportedChainIds?: any[]
}

interface AsyncComponentProps {
  name: string
  supportedChainIds?: any[]
}

const ENV_ROUTES = {
  dev: [
    {
      path: '/',
      componentName: '_Application/_Layout',
    },
  ],
  test: [
    {
      path: '/',
      componentName: '_Application/_Layout',
    },
  ],
  prod: [
    {
      path: '/',
      componentName: '_Application/_Layout',
    },
  ],
}

const ENV_MAP = {
  local: 'dev',
  dev: 'dev',
  test: 'test',
  staging: 'prod',
  prod: 'prod',
  default: 'prod',
}

const routes: RouteObjectProps[] = ENV_ROUTES[ENV_MAP[process.env.REACT_APP_SDK_ENV || 'dev']] || ENV_ROUTES.prod

const AsyncComponent: React.FC<AsyncComponentProps> = ({ name, supportedChainIds, ...props }) => {
  const Component = loadable(() => import(`../views/${name}/index.tsx`))

  return (
    <>
      <Component {...props} supportedChainIds={supportedChainIds} />
    </>
  )
}

const generateRoutes = (routes: RouteObjectProps[]): RouteObject[] => {
  return routes.map(({ path, componentName, supportedChainIds, children }) => ({
    path: path,
    element: <AsyncComponent name={componentName} supportedChainIds={supportedChainIds} />,
    children: children && generateRoutes(children),
  }))
}

const Router = () => {
  return useRoutes([...generateRoutes(routes), { path: '*', element: <div /> }])
}

export default Router
