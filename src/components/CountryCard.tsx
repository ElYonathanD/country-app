import { Link } from 'react-router'
import { Country } from '../interfaces/country'
import './CountryCard.css'
interface Props {
  country: Country
}
const CountryCard = ({ country }: Props) => {
  return (
    <Link to={`/country/${country.cca2}`} className='card'>
      <img className='image' src={country.flags.png} alt={country.flags.alt} />
      <div className='info'>
        <h2>{country.name.common}</h2>
        <p>Region: {country.region}</p>
        <p>Population: {country.population}</p>
        <p>
          {country.capital?.length && country.capital?.length > 1
            ? 'Capitales:'
            : 'Capital:'}{' '}
          {country.capital?.join(', ')}
        </p>
      </div>
    </Link>
  )
}

export default CountryCard
