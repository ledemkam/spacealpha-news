import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Apod, Home, Hubble, Landing, News, Spacex, Webb} from './pages'
import { apodPageLoader, hubblePageLoader, newsPageLoader, singleHubblePageLoader, spacexPageLoader, webbPageLoader } from './lib/axios/config'
import { ErrorElement } from './components'
import { LandingPageLoader } from './pages/Landing'
import SingleHubble from './pages/SingleHubble'


const router = createBrowserRouter([
  {
  path: "/",
  element: <Home/>,
  children: [{
    index: true,
    element: <Landing/>,
    loader: LandingPageLoader,
    errorElement: <ErrorElement/>
  },
  {
    path:"spacex",
    loader: spacexPageLoader,
    element: <Spacex/>,
    errorElement: <ErrorElement/>
  },
  {
    path:"webb",
    loader: webbPageLoader,
    element: <Webb/>,
    errorElement: <ErrorElement/>
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
  },
  {
    path: "hubble/:id",
    element: <SingleHubble />,
    loader: singleHubblePageLoader,
    errorElement: <ErrorElement />,
  },
]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
  )
