import { ReactNode, useCallback, useEffect, useState } from 'react'
import { Countries, Country } from '../interfaces/country'
import { countriesContext } from './countriesContext'

const API_URL = 'https://restcountries.com/v3.1'

interface CountriesProviderProps {
  children: ReactNode
}

// Crear el proveedor
export const CountriesProvider = ({ children }: CountriesProviderProps) => {
  const [countries, setCountries] = useState<Countries>({
    all: [],
    Africa: [],
    Americas: [],
    Antarctic: [],
    Asia: [],
    Europe: [],
    Oceania: []
  })
  const [error, setError] = useState('')
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [currentCountry, setCurrentCountry] = useState<Country[]>([])

  const getCountries = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/all`)
      if (res.status == 200) {
        const data = await res.json()
        setCountries((current) => ({ ...current, all: data }))
        setFilteredCountries(data)
      } else {
        setError('Error al obtener países')
      }
    } catch (error) {
      console.log(error)
      setError('Error al obtener países')
    }
  }, [])

  const getCountriesByRegion = async (region: keyof Countries) => {
    if (countries[`${region}`]?.length) {
      setFilteredCountries(countries[`${region}`])
      return
    }
    try {
      const res = await fetch(`${API_URL}/region/${region}`)
      const data = await res.json()
      setCountries((current) => ({ ...current, [region]: data }))
      setFilteredCountries(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getCountryByCode = async (code: string) => {
    try {
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
    }
  }

  const getCountriesByCapital = async (capital: string) => {
    if (capital === '') {
      setError('')
      setFilteredCountries(countries.all)
      return
    }
    try {
      const res = await fetch(`${API_URL}/capital/${capital}`)
      if (res.status == 200) {
        const data = await res.json()
        setFilteredCountries(data)
        setError('')
      } else {
        setError('No hay países que mostrar')
      }
    } catch (error) {
      console.error(error)
      setError('Error al obtener países')
    }
  }

  const searchCountries = async (term: string) => {
    if (term === '') {
      setError('')
      setFilteredCountries(countries.all)
      return
    }
    try {
      const res = await fetch(`${API_URL}/name/${term}`)
      if (res.status == 200) {
        const data = await res.json()
        setFilteredCountries(data)
        setError('')
      } else {
        setError('No hay países que mostrar')
      }
    } catch (error) {
      console.log(error)
      setError('Error al obtener países')
    }
  }

  useEffect(() => {
    getCountries()
  }, [])
  return (
    <countriesContext.Provider
      value={{
        filteredCountries,
        error,
        currentCountry,
        getCountriesByRegion,
        searchCountries,
        getCountriesByCapital,
        getCountryByCode
      }}
    >
      {children}
    </countriesContext.Provider>
  )
}
