import { useState, Suspense, useEffect } from 'react'
import { HomePage } from './Pages/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar, Footer, Loader} from './components/components';


const router = createBrowserRouter([
  {
    path : '/',
    element : <div>
      <Navbar/>
      <HomePage />
      <Footer/>
    </div>,
  },
  {
    path : '/about',
    element : <div><Navbar/>
    About Us
    <Footer/></div>,
  },
  {
    path : '/contact',
    element : <div><Navbar/>
    Contact US
    <Footer/>
    </div>,
  },
  {
    path : '/services',
    element : <div><Navbar/>
    Services
    <Footer/>
    </div>
  }
])

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) 

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {
        isLoading ? 
          (<Loader/>) 
          : 
          (<Suspense fallback={<Loader/>}>
            <RouterProvider router={router} />
          </Suspense>)
      }
    </div>
  )
}

export default App
