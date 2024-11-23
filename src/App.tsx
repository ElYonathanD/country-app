import './App.css'
import CountriesList from './components/CountriesList'
import Header from './components/Header'
import { CountriesProvider } from './context/CountriesProvider'

function App() {
  return (
    <CountriesProvider>
      <Header />
      <CountriesList />
    </CountriesProvider>
  )
}

export default App
