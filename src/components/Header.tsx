import { Country } from '../interfaces/country'

interface Props {
  countries: Country[]
  searchCountries: (term: string) => void
  error: string
}
let debounceTimeout: number | null = null
const Header = ({ countries, searchCountries, error }: Props) => {
  const searchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value

    if (debounceTimeout) {
      clearTimeout(debounceTimeout)
    }

    debounceTimeout = setTimeout(() => {
      searchCountries(searchValue)
    }, 400)
  }
  return (
    <div>
      <p>{!error ? `${countries.length} resultados` : '0 resultados'}</p>
      <input type='text' onChange={searchCountry} name='search' />
    </div>
  )
}

export default Header
