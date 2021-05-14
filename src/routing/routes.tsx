import { Route, Switch } from 'react-router-dom'

import { routes } from './route-declarations'

function NotFound() {
  return <div>{'Not found'}</div>
}

export function Routes() {
  return (
    <>
      <Switch>
        {routes.map(({ path, Component }) => (
          <Route exact path={path} key={path}>
            <Component />
          </Route>
        ))}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  )
}
