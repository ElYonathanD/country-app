import { useContext, useEffect } from 'react'
import CountriesList from '../components/CountriesList'
import Search from '../components/Search'
import { countriesContext } from '../context/countriesContext'

const CountriesByName = () => {
  const {
    countries,
    error,
    getCountriesByCapital,
    searchCountries,
    loading,
    cleanError
  } = useContext(countriesContext)
  useEffect(() => {
    cleanError()
  }, [])
  return (
    <>
      <Search
        countries={countries.byName}
        error={error}
        getCountriesByCapital={getCountriesByCapital}
        searchCountries={searchCountries}
      />
      <CountriesList
        countries={countries.byName.countries}
        error={error}
        loading={loading}
      />
    </>
  )
}

export default CountriesByName
