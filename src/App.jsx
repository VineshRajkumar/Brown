import { useState,useEffect } from 'react'
import { Header,Footer } from './components'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login,logout } from './features/auth/authSlice'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
     authService.getCurrentUser()
     .then((userData)=>{
      if(userData) return dispatch(login({userData: userData}))
      else return dispatch(logout())
     })
     .catch((error) => console.log("Error fetching user:", error))
     .finally(()=>(setLoading(false)))
  }, [])
  

  return (
    <>
    <Header/>
    <Footer/>
    </>
  )
}

export default App
