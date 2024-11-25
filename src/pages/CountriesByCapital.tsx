import { useContext } from 'react'
import CountriesList from '../components/CountriesList'
import Search from '../components/Search'
import { countriesContext } from '../context/countriesContext'

const CountriesByCapital = () => {
  const { countries, error, getCountriesByCapital, searchCountries } =
    useContext(countriesContext)
  return (
    <>
      <Search
        capital={true}
        countries={countries.byCapital}
        error={error}
        getCountriesByCapital={getCountriesByCapital}
        searchCountries={searchCountries}
      />
      <CountriesList countries={countries.byCapital} error={error} />
    </>
  )
}

export default CountriesByCapital
