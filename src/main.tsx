import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Apod, Home, Hubble, Landing, News, Spacex, Webb} from './pages'
import { apodPageLoader, hubblePageLoader, newsPageLoader } from './lib/axios/config'
import { ErrorElement } from './components'


const router = createBrowserRouter([
  {
  path: "/",
  element: <Home/>,
  children: [{
    index: true,
    element: <Landing/>
  },
  {
    path:"spacex",
    element: <Spacex/>
  },
  {
    path:"webb",
    element: <Webb/>
  },
  {
    path:"apod",
    loader: apodPageLoader,
    element: <Apod/>,
    errorElement: <ErrorElement/>
  },
  {
    path:"hubble",
    element: <Hubble/>,
    loader: hubblePageLoader,
    errorElement: <ErrorElement/>
  },
  {
    path:"news",
    element: <News/>,
    loader: newsPageLoader,
    errorElement: <ErrorElement/>
  }
]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
  )
