import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Home from './components/Home/index.tsx'
import Hero from './components/Hero/index.tsx'
import { WordContextProvider } from './context/WordContext.tsx'
import PageNotFound from './components/PageNotFound/index.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<Hero />} />
      <Route path='search' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WordContextProvider>
      <RouterProvider router={router} />
    </WordContextProvider>
  </React.StrictMode>,
)
