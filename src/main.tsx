import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Apod, Home, Hubble, Landing, News, Spacex, Webb} from './pages'


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
    element: <Apod/>
  },
  {
    path:"hubble",
    element: <Hubble/>
  },
  {
    path:"news",
    element: <News/>
  }
]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
  )
