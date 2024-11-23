import React, { useContext } from 'react'
import { countriesContext } from '../context/countriesContext'

let debounceTimeout: number | null = null

interface Props {
  capital?: boolean
}
const Search = ({ capital }: Props) => {
  const { filteredCountries, searchCountries, error, getCountriesByCapital } =
    useContext(countriesContext)
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
      <p>
        {!error ? `${filteredCountries.length} resultados` : '0 resultados'}
      </p>{' '}
      <input type='text' onChange={searchCountry} name='search' />
    </div>
  )
}

export default Search
