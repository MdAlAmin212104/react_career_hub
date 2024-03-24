import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Blogs from './components/Blogs/Blogs';
import Jobs from './components/Jobs/Jobs';
import ErrorPages from './components/ErrorPages/ErrorPages';
import JobsDetails from './components/JobsDetails/JobsDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPages/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader: () =>fetch('jobs.json')
      },
      {
        path: "/blogs",
        element:<Blogs/>
      },
      {
        path: "/jobs",
        element:<Jobs/>
      },
      {
        path: "/job/:id",
        element: <JobsDetails />,
        loader : ()=>fetch('jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
