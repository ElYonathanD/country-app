import { useContext } from 'react'
import CountriesList from '../components/CountriesList'
import FilterRegion from '../components/FilterRegion'
import { countriesContext } from '../context/countriesContext'

const CountriesByRegion = () => {
  const { countries, error, getCountriesByRegion, region, loading } =
    useContext(countriesContext)
  return (
    <>
      <FilterRegion
        countries={countries[`${region}`]}
        error={error}
        region={region}
        getCountriesByRegion={getCountriesByRegion}
      />
      <CountriesList
        countries={countries[`${region}`]}
        error={error}
        loading={loading}
      />
    </>
  )
}

export default CountriesByRegion
