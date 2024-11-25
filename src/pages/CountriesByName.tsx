import { useContext } from 'react'
import CountriesList from '../components/CountriesList'
import Search from '../components/Search'
import { countriesContext } from '../context/countriesContext'

const CountriesByName = () => {
  const { countries, error, getCountriesByCapital, searchCountries, loading } =
    useContext(countriesContext)
  return (
    <>
      <Search
        countries={countries.byName}
        error={error}
        getCountriesByCapital={getCountriesByCapital}
        searchCountries={searchCountries}
      />
      <CountriesList
        countries={countries.byName}
        error={error}
        loading={loading}
      />
    </>
  )
}

export default CountriesByName
