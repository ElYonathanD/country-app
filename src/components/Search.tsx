import { Country } from '../interfaces/country'
import './search.css'

let debounceTimeout: number | null = null

interface Props {
  countries: { term: string; countries: Country[] }
  error: string
  capital?: boolean
  getCountriesByCapital: (term: string) => void
  searchCountries: (term: string) => void
}
const Search = ({
  countries,
  capital,
  error,
  getCountriesByCapital,
  searchCountries
}: Props) => {
  const handleSearchCountries = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value

    if (debounceTimeout) {
      clearTimeout(debounceTimeout)
    }

    debounceTimeout = setTimeout(() => {
      if (capital) {
        getCountriesByCapital(searchValue)
        return
      }
      searchCountries(searchValue)
    }, 400)
  }
  return (
    <div className='ctn-search'>
      <p className='text-result'>
        {!error ? `${countries.countries.length} resultados` : '0 resultados'}
      </p>{' '}
      <input
        type='text'
        placeholder='Buscar'
        onChange={handleSearchCountries}
        name='search'
        defaultValue={countries.term}
      />
    </div>
  )
}

export default Search
