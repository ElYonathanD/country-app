import { Country } from '../interfaces/country'
import './countriesList.css'
import CountryCard from './CountryCard'

interface Props {
  countries: Country[]
  error: string
}
const CountriesList = ({ countries, error }: Props) => {
  return (
    <ul className='countries'>
      {!error ? (
        countries.map((country: Country) => (
          <CountryCard key={country.cca2} country={country} />
        ))
      ) : (
        <p>No hay países que mostrar</p>
      )}
    </ul>
  )
}

export default CountriesList
