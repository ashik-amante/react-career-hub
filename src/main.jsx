import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
// import Jobs from './components/Jobs/Jobs.jsx';
import Errorpage from './components/Errorpage/Errorpage.jsx';
import JobDetail from './components/JobDetail/JobDetail.jsx';
import Appliedjob from './components/AppliedJob/Appliedjob.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/jobs',
        element:<Appliedjob></Appliedjob>,
        loader: ()=> fetch('../jobs.json')
      },
      {
        path: '/job/:id',
        element:<JobDetail></JobDetail>,
        loader:()=> fetch('../jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
