import { useState, Suspense, useEffect } from 'react'
import { HomePage, AboutUsPage, ContactUsPage, ServicesPage } from './Pages/pages'
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
    <AboutUsPage/>
    <Footer/></div>,
  },
  {
    path : '/contact',
    element : <div><Navbar/>
    <ContactUsPage/>
    <Footer/>
    </div>,
  },
  {
    path : '/services',
    element : <div><Navbar/>
    <ServicesPage/>
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
