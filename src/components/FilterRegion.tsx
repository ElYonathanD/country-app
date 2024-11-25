import { useState } from 'react'
import { Country, Region } from '../interfaces/country'

interface Props {
  countries: Country[]
  error: string
  region: Region
  getCountriesByRegion: (region: Region) => void
}
const FilterRegion = ({
  countries,
  error,
  getCountriesByRegion,
  region
}: Props) => {
  const [activeRegion, setActiveRegion] = useState<Region>(region)

  const handleRegionClick = (region: Region) => {
    setActiveRegion(region)
    getCountriesByRegion(region)
  }
  return (
    <div>
      <p>{!error ? `${countries.length} resultados` : '0 resultados'}</p>
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

export default FilterRegion
