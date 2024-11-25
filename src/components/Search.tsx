import { Country } from '../interfaces/country'

let debounceTimeout: number | null = null

interface Props {
  countries: Country[]
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
  const searchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div>
      <p>{!error ? `${countries.length} resultados` : '0 resultados'}</p>{' '}
      <input type='text' onChange={searchCountry} name='search' />
    </div>
  )
}

export default Search
