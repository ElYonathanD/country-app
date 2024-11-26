import { Link } from 'react-router'
import { Country } from '../interfaces/country'
import './CountryCard.css'
interface Props {
  country: Country
}
const CountryCard = ({ country }: Props) => {
  const population = country.population.toLocaleString('de-DE')
  return (
    <Link to={`/country/${country.cca2}`} className='card'>
      <img className='image' src={country.flags.png} alt={country.flags.alt} />
      <div className='info'>
        <h2>{country.name.common}</h2>
        <p>
          <span className='sub-title'>Region: </span>
          {country.region}
        </p>
        <p>
          {country.capital?.length && country.capital?.length > 1 ? (
            <span className='sub-title'>Capitales: </span>
          ) : (
            <span className='sub-title'>Capital: </span>
          )}{' '}
          {country.capital?.join(', ')}
        </p>
        <p>
          <span className='sub-title'>Población: </span>
          {population}
        </p>
      </div>
    </Link>
  )
}

export default CountryCard
