import { useContext, useEffect } from 'react'
import CountriesList from '../components/CountriesList'
import FilterRegion from '../components/FilterRegion'
import { countriesContext } from '../context/countriesContext'

const CountriesByRegion = () => {
  const { countries, error, getCountriesByRegion, region } =
    useContext(countriesContext)
  useEffect(() => {
    getCountriesByRegion(region)
  }, [])
  return (
    <>
      <FilterRegion
        countries={countries[`${region}`]}
        error={error}
        region={region}
        getCountriesByRegion={getCountriesByRegion}
      />
      <CountriesList countries={countries[`${region}`]} error={error} />
    </>
  )
}

export default CountriesByRegion
