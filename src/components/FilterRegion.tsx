import { useState } from 'react'
import { Country, Region } from '../interfaces/country'
import './filterRegion.css'
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
    <div className='ctn-filter'>
      <p className='text-result'>
        {!error ? `${countries.length} resultados` : '0 resultados'}
      </p>
      <div className='regions'>
        {Object.values(Region).map((region) => (
          <button
            key={region}
            onClick={() => handleRegionClick(region as Region)}
            style={{
              backgroundColor: activeRegion === region ? '#333' : '#222',
              color: activeRegion === region ? '#fff' : '#ccc'
            }}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FilterRegion
