import './App.css'
import CountriesList from './components/CountriesList'
import Header from './components/Header'
import { useCountries } from './hooks/useCountries'

function App() {
  const { filteredCountries, searchCountries, error } = useCountries()

  return (
    <>
      <Header
        countries={filteredCountries}
        searchCountries={searchCountries}
        error={error}
      />
      <CountriesList countries={filteredCountries} error={error} />
    </>
  )
}

export default App
