import { Country } from '../interfaces/country'
import './countriesList.css'
import CountryCard from './CountryCard'
import Skeleton from './Skeleton'

interface Props {
  countries: Country[]
  error: string
  loading: boolean
}
const CountriesList = ({ countries, error, loading }: Props) => {
  return (
    <ul className='countries'>
      {loading ? (
        <Skeleton />
      ) : !error ? (
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
