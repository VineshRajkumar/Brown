//createBrowserRouter not supported for gh-pages 
//so using createhashrouter
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
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

/*

https://stackoverflow.com/questions/46056414/getting-404-for-links-with-create-react-app-deployed-to-github-pages

Why We Used createHashRouter Instead of createBrowserRouter ? 

READ BOTH EXPLAIANTIONS TO UNDERSTAND THE ERROR 
--------------------------------------------------------------------------------
EXPLAINED BY GPT :- 
When deploying a React app on GitHub Pages, direct navigation to 
routes (e.g., /post/:id) results in a 404 error because GitHub Pages 
only serves index.html and doesn’t support server-side routing.

In vercel and all we are assigned a seperate computer/server so 
it understands the dynamic routing just like when we run in development.
But in github pages it just shows us what files we send it html,js,css that all.

To fix this, we replaced createBrowserRouter with createHashRouter, 
which appends #/ to URLs (e.g., example.com/#/post/123). This 
ensures that all routes load correctly, as GitHub Pages 
always serves index.html regardless of the URL.
--------------------------------------------------------------------------------
EXPLAINED BY ME :- 
Now For Example :- /login is alredy defined in our files but /post/welcome-to-brown 
or some other post having different id like in format  /post/post_id ->  now post_id 
for each post is not written in our files it basically it takes the slug value only
so slug value we will get it dynamically only but github cannot handle this thats 
the issue as it only can control frontend/static files no backend code can be 
controlled it github pages so for that issue what we have done is instead of 
using createBrowserRouter we used createHashRouter which will add # like -> 
instead of https://vineshrajkumar.github.io/Brown/post/pos_id it will be 
https://vineshrajkumar.github.io/Brown/#/post/pos_id so what will this # do is 
it will execute the url next to it like /post/post_id in the index.html file 
and index file will understand it is react-router and according to it it will navigate to that post.

--------------------------------------------------------------------------------
In short Summary :- github pages/github server doesnot know how to handle dynamic 
routes(/post/randome_post_id) so by using createHashRouter it will add # in url 
due to which github will understand that if something like that comes then 
give control to index.html file 
--------------------------------------------------------------------------------


*/
const router = createHashRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '',
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
