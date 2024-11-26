import { ReactNode, useCallback, useEffect, useState } from 'react'
import { Countries, Country, Region } from '../interfaces/country'
import { countriesContext } from './countriesContext'

const API_URL = 'https://restcountries.com/v3.1'

interface CountriesProviderProps {
  children: ReactNode
}

// Crear el proveedor
export const CountriesProvider = ({ children }: CountriesProviderProps) => {
  const [countries, setCountries] = useState<Countries>({
    all: [],
    byName: { term: '', countries: [] },
    byCapital: { term: '', countries: [] },
    Africa: [],
    Americas: [],
    Antarctic: [],
    Asia: [],
    Europe: [],
    Oceania: []
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [region, setRegion] = useState<Region>(Region.Americas)
  const [currentCountry, setCurrentCountry] = useState<Country[]>([])
  const getCountries = useCallback(async () => {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/all`)
      if (res.status == 200) {
        const data = await res.json()
        setCountries((current) => ({
          ...current,
          all: data,
          byName: { term: '', countries: data },
          byCapital: { term: '', countries: data }
        }))
      } else {
        setError('Error al obtener países')
      }
    } catch (error) {
      console.log(error)
      setError('Error al obtener países')
    } finally {
      setLoading(false)
    }
  }, [])

  const getCountriesByRegion = async (region: Region) => {
    setRegion(region)
    if (countries[`${region}`]?.length) return
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/region/${region}`)
      if (res.status == 200) {
        const data = await res.json()
        setError('')
        setCountries((current) => ({ ...current, [region]: data }))
      } else {
        setError('Error al obtener países')
      }
    } catch (error) {
      console.error(error)
      setError('Error al obtener países')
    } finally {
      setLoading(false)
    }
  }

  const getCountryByCode = async (code: string) => {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/alpha/${code}`)
      if (res.status == 200) {
        const data = await res.json()
        setCurrentCountry(data)
        setError('')
      } else {
        setError('No hay países que mostrar')
      }
    } catch (error) {
      setError('Error al obtener país')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const getCountriesByCapital = async (capital: string) => {
    if (capital === '') {
      setError('')
      setCountries((current) => ({
        ...current,
        byCapital: { term: capital, countries: countries.all }
      }))
      return
    }
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/capital/${capital}`)
      if (res.status == 200) {
        const data = await res.json()
        setCountries((current) => ({
          ...current,
          byCapital: { term: capital, countries: data }
        }))
        setError('')
      } else {
        setError('No hay países que mostrar')
      }
    } catch (error) {
      console.error(error)
      setError('Error al obtener países')
    } finally {
      setLoading(false)
    }
  }

  const searchCountries = async (term: string) => {
    if (term === '') {
      setError('')
      setCountries((current) => ({
        ...current,
        byName: { term: term, countries: countries.all }
      }))
      return
    }
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/name/${term}`)
      if (res.status == 200) {
        const data = await res.json()
        setCountries((current) => ({
          ...current,
          byName: { term: term, countries: data }
        }))
        setError('')
      } else {
        setError('No hay países que mostrar')
      }
    } catch (error) {
      console.log(error)
      setError('Error al obtener países')
    } finally {
      setLoading(false)
    }
  }

  const cleanError = () => {
    setError('')
  }
  useEffect(() => {
    getCountries()
    getCountriesByRegion(Region.Americas)
  }, [])
  return (
    <countriesContext.Provider
      value={{
        countries,
        error,
        loading,
        currentCountry,
        region,
        getCountriesByRegion,
        searchCountries,
        getCountriesByCapital,
        getCountryByCode,
        cleanError
      }}
    >
      {children}
    </countriesContext.Provider>
  )
}
