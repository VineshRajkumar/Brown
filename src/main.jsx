//createBrowserRouter not supported for gh-pages 
//so using createhashrouter
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import store from './store/store'
import Layout from './Layout'
import LoginPage from './app/login/page'
import SignUpPage from './app/sign-up/page'
import PostPage from './app/post-page/page'
import Dashboard from './app/dashboard/page'
import EditPost from './app/edit-post/page'
import Post from './app/post/page'
import Home from './app/home/page'
import { Protected } from './components'
import NotFoundPage from './app/not-found/page'

const router = createBrowserRouter([
  {
    path: '/Brown/',
    element: <Layout/>,
    children: [
      {
        path: '/Brown/',
        element: <Home/>,
      },
      {
        path: 'login',
        element:(
          <Protected authentication={false}>
            <LoginPage/>
          </Protected>
        )
      },
      {
        path: 'sign-up',
        element: (
          <Protected authentication={false}>
            <SignUpPage/>
          </Protected>
          )
      },
      {
        path: 'post',
        element:  (
        <Protected authentication={true}>
          <PostPage/>
        </Protected>)
      },
      {
        path: 'dashboard',
        element:(
        <Protected authentication={true}> 
          <Dashboard/>
        </Protected>
        )
      },
      {
        path: 'edit-post/:slug',
        element: (
        <Protected authentication={true}>
          <EditPost/>
        </Protected> 
        )
      },
      {
        path: 'post/:slug',
        element: <Post/>
      },
      {/* 404 Page*/},
      {
        path: '*',
        element: <NotFoundPage/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      {/* <App/> */}
      <RouterProvider router={router} /> 
      
    </StrictMode>
  </Provider>
)
