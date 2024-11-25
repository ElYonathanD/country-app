import { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { countriesContext } from '../context/countriesContext'
import Skeleton from '../components/Skeleton'

const Country = () => {
  const { code } = useParams()
  const { getCountryByCode, currentCountry, loading } =
    useContext(countriesContext)
  let country = null
  useEffect(() => {
    if (code) getCountryByCode(code)
  }, [])
  country = currentCountry[0]
  return loading ? (
    <Skeleton />
  ) : (
    country && (
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
  )
}

export default Country
