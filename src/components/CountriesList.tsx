import { useContext } from 'react'
import { Country } from '../interfaces/country'
import './countriesList.css'
import CountryCard from './CountryCard'
import { countriesContext } from '../context/countriesContext'

const CountriesList = () => {
  const { filteredCountries, error } = useContext(countriesContext)
  return (
    <ul className='countries'>
      {!error ? (
        filteredCountries.map((country: Country) => (
          <CountryCard key={country.cca2} country={country} />
        ))
      ) : (
        <p>No hay países que mostrar</p>
      )}
    </ul>
  )
}

export default CountriesList
