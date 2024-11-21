import { useCountries } from '../hooks/useCountries'
import { Country } from '../interfaces/country'
import './countriesList.css'
import CountryCard from './CountryCard'
const CountriesList = () => {
  const { countries } = useCountries()
  if (countries) {
    console.log('asjaskhdsajk')
  }

  return (
    <ul className='countries'>
      {countries.map((country: Country) => (
        <CountryCard key={country.cca2} country={country} />
      ))}
    </ul>
  )
}

export default CountriesList
