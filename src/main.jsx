import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Pages/Statistics/Statistics.jsx';
import AppliedJob from './Pages/AppliedJob/AppliedJob.jsx';
import Blog from './Pages/Blog/Blog.jsx';
import Home from './Pages/Home/Home.jsx';
import JobDetails from './Pages/JobDetails/JobDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/jobDetails/:id',
        loader: () => fetch('../jobs.json'),
        element: <JobDetails></JobDetails>
      },
      {
        path: '/appliedJob',
        loader: () => fetch('../jobs.json'),
        element: <AppliedJob></AppliedJob>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
