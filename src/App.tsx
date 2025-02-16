import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import './App.css'
import { CountriesProvider } from './context/CountriesProvider'
import CountriesByName from './pages/CountriesByName'
import CountriesByRegion from './pages/CountriesByRegion'
import CountriesByCapital from './pages/CountriesByCapital'
import Navbar from './components/Navbar'
import Country from './pages/Country'

function App() {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <h1 className='title'>Country App</h1>
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/countries-by-name' />} />
          <Route path='/countries-by-name' element={<CountriesByName />} />
          <Route path='/countries-by-region' element={<CountriesByRegion />} />
          <Route
            path='/countries-by-capital'
            element={<CountriesByCapital />}
          />
          <Route path='/country/:code' element={<Country />} />
          <Route path='*' element={<Navigate to='/countries-by-name' />} />
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  )
}

export default App
