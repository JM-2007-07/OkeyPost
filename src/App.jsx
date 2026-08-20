import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HowToBuy from './pages/HowToBuy'
import Home from './pages/Home'
import Sales from './pages/Sales'
import NotFound from './pages/NotFound'
import Layout from './layout/Layout'

export default function App() {
  /* const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/how-to-buy',
      element: <HowToBuy />
    },
    {
      path: '/sales',
      element: <Sales />
    },
    {
      path: '*',
      element: <NotFound/>
    }
  ]) */

    const router = createBrowserRouter([
      {
        path: '/',
        element: <Layout/>,
        children: [
          {
            index: true,
            element: <Home/>
          },
          {
            path: '/how-to-buy',
            element: <HowToBuy />
          },
          {
            path: '/sales',
            element: <Sales />
          },
          {
            path: '*',
            element: <NotFound/>
          }
        ]
      }
    ])
  return (
    <RouterProvider router={router} />
  )
}
