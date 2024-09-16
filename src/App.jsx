import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { HomePage } from './Pages/pages'
import { AboutUs } from './Pages/pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
