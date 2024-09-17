import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './Pages/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { div } from 'framer-motion/client'
import { Navbar, Footer} from './components/components';

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
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
