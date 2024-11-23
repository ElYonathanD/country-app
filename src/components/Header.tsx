import { useContext, useState } from 'react'
import { Region } from '../interfaces/country'
import { countriesContext } from '../context/countriesContext'

let debounceTimeout: number | null = null
const Header = () => {
  const [activeRegion, setActiveRegion] = useState<Region>()
  const { filteredCountries, error, getCountriesByRegion, searchCountries } =
    useContext(countriesContext)

  const searchCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value

    if (debounceTimeout) {
      clearTimeout(debounceTimeout)
    }

    debounceTimeout = setTimeout(() => {
      searchCountries(searchValue)
    }, 400)
  }

  const handleRegionClick = (region: Region) => {
    setActiveRegion(region)
    getCountriesByRegion(region)
  }
  return (
    <div>
      <p>
        {!error ? `${filteredCountries.length} resultados` : '0 resultados'}
      </p>
      <input type='text' onChange={searchCountry} name='search' />
      {Object.values(Region).map((region) => (
        <button
          key={region}
          onClick={() => handleRegionClick(region as Region)}
          style={{
            padding: '10px 20px',
            borderRadius: '20px',
            backgroundColor: activeRegion === region ? '#333' : '#222',
            color: activeRegion === region ? '#fff' : '#ccc',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {region}
        </button>
      ))}
    </div>
  )
}

export default Header
