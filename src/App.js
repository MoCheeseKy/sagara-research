import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { siteRoute } from './routes'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {siteRoute.map((res, i) => (
        <Route key={i} path={res.path} element={<res.element />} />
      ))}
    </Route>
  )
)
