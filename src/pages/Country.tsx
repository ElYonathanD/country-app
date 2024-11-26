import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router'
import { countriesContext } from '../context/countriesContext'
import Skeleton from '../components/Skeleton'
import './country.css'
const Country = () => {
  const { code } = useParams()
  const { getCountryByCode, currentCountry, loading } =
    useContext(countriesContext)
  let country = null
  useEffect(() => {
    if (code) getCountryByCode(code)
  }, [code])
  country = currentCountry[0]
  return loading ? (
    <Skeleton />
  ) : (
    country && (
      <div className='ctn-country'>
        <div className='ctn-country-flag-borders'>
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className='country-flag'
          />
          <div className='ctn-borders'>
            <p>
              <strong>Fronteras:</strong>
            </p>
            {country.borders ? (
              country.borders.map((border) => (
                <Link key={border} to={`/country/${border}`}>
                  {border}
                </Link>
              ))
            ) : (
              <p>No aplica</p>
            )}
          </div>
        </div>
        <div className='ctn-country-info'>
          <h1 className='country-name'>{country.name.common}</h1>
          <div className='country-details'>
            <p className='detail-item'>
              <strong>Capital:</strong>{' '}
              {country.capital?.[0] || 'No disponible'}
            </p>
            <p className='detail-item'>
              <strong>Región:</strong> {country.region}
            </p>
            <p className='detail-item'>
              <strong>Subregión:</strong> {country.subregion || 'No disponible'}
            </p>
            <p className='detail-item'>
              <strong>Población:</strong> {country.population.toLocaleString()}
            </p>
            <p className='detail-item'>
              <strong>Idioma:</strong>{' '}
              {Object.values(country.languages || {}).join(', ')}
            </p>
            <p className='detail-item'>
              <strong>Moneda:</strong>{' '}
              {Object.values(country.currencies || {})
                .map((currency) => `${currency.name} (${currency.symbol})`)
                .join(', ')}
            </p>
            <p className='detail-item'>
              <strong>Zona horaria:</strong> {country.timezones.join(', ')}
            </p>
            <a
              href={country.maps.googleMaps}
              target='_blank'
              rel='noopener noreferrer'
              className='country-map-link'
            >
              Ver en el mapa
            </a>
          </div>
        </div>
      </div>
    )
  )
}

export default Country
