import { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { countriesContext } from '../context/countriesContext'

const Country = () => {
  const { code } = useParams()
  const { currentCountry, getCountryByCode } = useContext(countriesContext)
  useEffect(() => {
    if (code) getCountryByCode(code)
  }, [])
  const country = currentCountry[0]
  return (
    <div>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h1>{country.name.common}</h1>
      <p>Region: {country.region}</p>
      <p>Sub Region: {country.subregion}</p>
      <a href={country.maps.googleMaps} target='_blank'>
        Ver en el mapa
      </a>
    </div>
  )
}

export default Country
